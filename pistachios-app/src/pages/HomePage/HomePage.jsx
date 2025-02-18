import React from "react";
import "./HomePage.css";
import barFun from "../../assets/Pictures/barfun.jpg"
import pistachioImg from "../../assets/Pictures/PistachiosColossal.webp"
import criticPic from "../../assets/Pictures/criticPic.jpg"
import karaoke from "../../assets/Pictures/karaoke.webp"
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
              <img id="barFunImage" className="postImage" src={barFun} alt="barFun"/>
              <h4>Welcome to Pistachios</h4>
            </div>
            <div className="postPreview">
            <img id="pistachioImage" className="postImage" src={pistachioImg} alt="barFun"/>

              <h4>A Night at Pistachios</h4>
            </div>
            <div className="postPreview">
            <img id="criticImage" className="postImage" src={criticPic} alt="barFun"/>

              <h4>New Review!</h4>
            </div>
            <div className="postPreview">
            <img id="karoakeImage" className="postImage" src={karaoke} alt="barFun"/>

              <h4>Karoake Chaos...</h4>
            </div>
            
          </div>
        </div>
        <div id="leftDivider" className="contentDividers"></div>
        <div className="middleContent">
          <h2 id="middleContentTitle" className="contentTitles">
            Drink of the Week
          </h2>
        </div>
        <div id="rightDivider" className="contentDividers"></div>
        <div className="rightContent">
          <h2 id=" rightContentTitle" className="contentTitles">
            Events
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
