import React from "react";
import "./HomePage.css";
import barFun from "../../assets/Pictures/barfun.jpg";
import pistachioImg from "../../assets/Pictures/PistachiosColossal.webp";
import criticPic from "../../assets/Pictures/criticPic.jpg";
import karaoke from "../../assets/Pictures/karaoke.webp";
import oldFashioned from "../../assets/Pictures/oldFashioned.jpg";
function HomePage() {
  return (
    <div className="homeMain">
      <div className="titleContainer">
        <h1 className="homeTitle">PISTACHIOS BAR & GRILL</h1>
        <h3 className="homeSubTitle">Crack open a good time!</h3>
      </div>
      <div className="ContentContainer">
        <div className="leftContent">
          <div>
            <h2 id="leftContentTitle" className="contentTitles">
              Blog Posts
            </h2>
          </div>
          <div id="postsContainer">
            <div className="postPreview">
              <img
                id="barFunImage"
                className="postImage"
                src={barFun}
                alt="barFun"
              />
              <h4 className="headerFont">Welcome to Pistachios</h4>
            </div>
            <div className="postPreview">
              <img
                id="pistachioImage"
                className="postImage"
                src={pistachioImg}
                alt="barFun"
              />

              <h4 className="headerFont">A Night at Pistachios</h4>
            </div>
            <div className="postPreview">
              <img
                id="criticImage"
                className="postImage"
                src={criticPic}
                alt="barFun"
              />

              <h4 className="headerFont">New Review!</h4>
            </div>
            <div className="postPreview">
              <img
                id="karoakeImage"
                className="postImage"
                src={karaoke}
                alt="barFun"
              />

              <h4 className="headerFont">Karoake Chaos...</h4>
            </div>
          </div>
        </div>
        <div id="leftDivider" className="contentDividers"></div>
        <div className="middleContent">
          <div>
            <h2 id="middleContentTitle" className="contentTitles">
              Drink of the Week
            </h2>
          </div>
          <div id="drinkContainer">
            <h2 id="drinkTitle" className="headerFont">
              Pistachio Old Fashioned
            </h2>
            <div id="drinkContentBox">
              <img id="oldFashionedImg" src={oldFashioned} alt="" />
              <div id="oldFashionedBlurb">
                <p>
                  An innovative twist on the classic Old Fashioned, this drink
                  combines the rich, nutty flavor of pistachios with the
                  timeless sophistication of a traditional cocktail.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="rightDivider" className="contentDividers"></div>
        <div className="rightContent">
          <h2 id=" rightContentTitle" className="contentTitles">
            Events
          </h2>
          <div id="eventsContainer">
            <div className="eventPreview">
              <h3 id="eventTitle" className="headerFont">
                Wacky Auction Night
              </h3>
              <h4>Every Friday @ 9PM</h4>
            </div>
            <div className="eventPreview">
              <h3 id="eventTitle" className="headerFont">
                Drunk Spelling Bee
              </h3>
              <h4>Wednesdays @ 8PM</h4>
            </div>
            <div className="eventPreview">
              <h3 id="eventTitle" className="headerFont">
                Live Mystery Karoake
              </h3>
              <h4>Saturdays @ 9PM</h4>
            </div>
            <div className="eventPreview">
              <h3 id="eventTitle" className="headerFont">
                MOVIE TRIVIA
              </h3>
              <h4>Sundays @ 7PM</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
