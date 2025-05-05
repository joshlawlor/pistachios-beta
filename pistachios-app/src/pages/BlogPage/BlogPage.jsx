import React from "react";
import "./BlogPage.css";
import karaokePic from "../../assets/Pictures/karoakePic.jpg";
import notesBanner from "../../assets/Pictures/notesBanner.png";

const BlogPage = () => {
  return (
    <div className="blogMain">
      {/* Banner Image */}
      <div className="blogBanner">
        <img src={notesBanner} alt="Blog Banner" />
      </div>

      {/* Blog Content */}
      <div className="blogContent">
        {/* Left Off-Center Image */}
        <img src={karaokePic} alt="Group singing karaoke on stage" className="blogImage" />

        {/* Blog Text */}
        <div className="blogText">
          <h1>Krazy Karaoke!</h1>
          <p>
            Last night was one for the books! My friends and I decided to hit up
            Pistachios Bar & Grill for their famous Krazy Karaoke Night, and let
            me tell you it lived up to the hype. We walked in expecting a casual
            night of off-key singing and a few laughs, but what we got was a
            full-blown concert (or at least, that’s what it felt like in our
            heads).
          </p>
          <p>
            The energy was electric a mix of fearless shower singers, hidden
            vocal powerhouses, and the occasional brave soul who relied entirely
            on charisma to carry the tune. I started the night playing it safe
            with a classic - Bon Jovi’s Livin’ on a Prayer but by round two, I
            was belting out Total Eclipse of the Heart like I was auditioning
            for a Broadway show. Did I hit all the notes? Absolutely not. Did
            the crowd cheer like I just won The Voice? Also no, but in my heart,
            they did.
          </p>

          <p>
            By the end of the night, my voice was hoarse, my cheeks hurt from
            laughing, and I had made new best friends (because nothing bonds
            strangers like a chaotic group rendition of Bohemian Rhapsody). If
            you ever find yourself at Pistachios on a karaoke night, grab the
            mic, grab a drink, and just go for it because the best performances
            aren’t about being perfect, they’re about having the most fun.
          </p>
      
        </div>
        
      </div>
        {/* Comment Form */}
        <div className="commentSection">
            <h2>Leave a Comment</h2>
            <form className="commentForm">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="comment">Comment:</label>
              <textarea id="comment" name="comment" rows="4" required></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
    </div>
  );
};

export default BlogPage;
