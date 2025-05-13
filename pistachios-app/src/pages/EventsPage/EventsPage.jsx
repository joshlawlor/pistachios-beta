import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./EventsPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import karaoke from "../../assets/Pictures/karaoke.webp";
import oldFashioned from "../../assets/Pictures/oldFashioned.jpg";
import barFun from "../../assets/Pictures/barfun.jpg";
import criticPic from "../../assets/Pictures/criticPic.jpg";
import eighties from "../../assets/Pictures/80s.jpg"
import publympics from "../../assets/Pictures/pubolympicas.png"
import comedy from "../../assets/Pictures/comedy.jpg"
import cocktails  from "../../assets/Pictures/cocktails.jpg"
import speeddate from "../../assets/Pictures/speeddate.jpg"
import nametume from "../../assets/Pictures/nametune.avif"
import boardgame from "../../assets/Pictures/boardgame.png"
import poolballs from "../../assets/Pictures/poolballs.webp"
import tvtrivia  from "../../assets/Pictures/tvtrivia.jpg"
const mockEvents = [
    {
        title: "80s Night Dance Party",
        date: "2025-05-20T21:00:00",
        image: eighties,
        category: "Music",
      },
      {
        title: "Pub Olympics",
        date: "2025-05-21T19:30:00",
        image: publympics,
        category: "Games",
      },
      {
        title: "Name That Tune Showdown",
        date: "2025-05-22T20:00:00",
        image: nametume,
        category: "Trivia",
      },
      {
        title: "Stand-Up Comedy Hour",
        date: "2025-05-23T20:00:00",
        image: comedy,
        category: "Music",
      },
      {
        title: "Cocktail Creation Challenge",
        date: "2025-05-24T18:00:00",
        image: cocktails,
        category: "Games",
      },
      {
        title: "TV Show Theme Song Quiz",
        date: "2025-05-25T19:00:00",
        image: tvtrivia,
        category: "Trivia",
      },
      {
        title: "Acoustic Open Mic",
        date: "2025-05-26T20:30:00",
        image: karaoke,
        category: "Music",
      },
      {
        title: "Pool Tournament",
        date: "2025-05-27T19:00:00",
        image: poolballs,
        category: "Games",
      },
      {
        title: "Adult Board Game Night",
        date: "2025-05-28T18:30:00",
        image: boardgame,
        category: "Games",
      },
      {
        title: "Bartender's Trivia Face-Off",
        date: "2025-05-29T20:00:00",
        image: criticPic,
        category: "Trivia",
      }
      ,
];

function EventsPage() {
  const [category, setCategory] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);
  const [nextEvent, setNextEvent] = useState(null);
  const [countdown, setCountdown] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const filtered =
      category === "All"
        ? mockEvents
        : mockEvents.filter((e) => e.category === category);
    setFilteredEvents(filtered);
  }, [category]);

  useEffect(() => {
    const upcoming = [...mockEvents]
      .filter((e) => new Date(e.date) > new Date())
      .sort((a, b) => new Date(a.date) - new Date(b.date))[0];
    setNextEvent(upcoming);
  }, []);

  useEffect(() => {
    if (!nextEvent) return;
    const interval = setInterval(() => {
      const now = new Date();
      const eventTime = new Date(nextEvent.date);
      const distance = eventTime - now;
      if (distance < 0) {
        setCountdown("It's happening now!");
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      setCountdown(`${days}d ${hours}h ${minutes}m`);
    }, 1000);
    return () => clearInterval(interval);
  }, [nextEvent]);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const renderEventCard = (event, i) => (
    <div key={i} className="eventCard">
      <img src={event.image} alt={event.title} className="eventImg" />
      <h3>{event.title}</h3>
      <p>
        {new Date(event.date).toLocaleDateString()} @{" "}
        {new Date(event.date).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <div className="eventButtons">
        <button onClick={() => alert("RSVP Confirmed!")}>RSVP</button>
        <button onClick={() => alert("Reminder set!")}>Remind Me</button>
      </div>
    </div>
  );

  return (
    <div className="eventsMain">
      <h1 className="eventsTitle">Upcoming Events</h1>

      <div className="countdownBanner">
        {nextEvent && (
          <h3>
            ⏳ Next Event: <strong>{nextEvent.title}</strong> in {countdown}
          </h3>
        )}
      </div>

      <div className="filters">
        {["All", "Games", "Music", "Trivia"].map((cat) => (
          <button
            key={cat}
            className={`filterButton ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {isMobile ? (
        <Slider {...sliderSettings}>
          {filteredEvents.map((event, i) => (
            <div key={i}>{renderEventCard(event, i)}</div>
          ))}
        </Slider>
      ) : (
        <div className="eventsGrid">
          {filteredEvents.map(renderEventCard)}
        </div>
      )}
    </div>
  );
}

export default EventsPage;
