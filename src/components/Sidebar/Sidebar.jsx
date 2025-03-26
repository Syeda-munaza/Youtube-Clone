import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  const [allCategory, setAllCategory] = useState([]);

  const handleGet = async () => {
    try {
      const API_KEY = "AIzaSyAkV2u5kfrACZIT4KyzX2ozA0V4y7vc76o";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.items) {
        setAllCategory(data.items);
      }

      console.log(data); // Log response data
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  const icons = {
    "Music": music,
    "Sports": sports,
    "Entertainment": entertainment,
    "Film & Animation":blogs,
    "Autos & Vehicles": news,
    "Pets & Animals": automobiles,
  };
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-links">
        {/* Static Links */}
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        {allCategory.slice(0, 7).map((cat) => (
          <div
            key={cat.id}
            className="side-link"
            onClick={() => setCategory(cat.id)}
          >
            <img src={icons[cat.snippet.title] || home} alt={cat.snippet.title} />
            <p>{cat.snippet.title}</p>
          </div>
        ))}

        {/* <div className="side-link" onClick={() => setCategory(0)}>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={news} alt="" />
          <p>News</p>
        </div> */}

        <hr />

        {/* Dynamic Categories from API */}
        {/* <div className="dynamic-categories">
          <h3>Categories</h3>
          {allCategory.map((cat) => (
            <div
              key={cat.id}
              className="side-link"
              onClick={() => setCategory(cat.id)}
            >
              <p>{cat.snippet.title}</p>
            </div>
          ))}
        </div> */}
        {/* 
        <hr /> */}

        {/* Subscribed Channels */}
        <div className="subscribed-list">
          <h3>Subscribed</h3>
          <div className="side-link" onClick={() => setCategory(0)}>
            <img src={jack} alt="" />
            <p>PewDiePie</p>
          </div>
          <div className="side-link" onClick={() => setCategory(0)}>
            <img src={simon} alt="" />
            <p>MrBeast</p>
          </div>
          <div className="side-link" onClick={() => setCategory(0)}>
            <img src={tom} alt="" />
            <p>Justin Bieber</p>
          </div>
          <div className="side-link" onClick={() => setCategory(0)}>
            <img src={megan} alt="" />
            <p>5-Minute Crafts</p>
          </div>
          <div className="side-link" onClick={() => setCategory(0)}>
            <img src={cameron} alt="" />
            <p>NasDaily</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
