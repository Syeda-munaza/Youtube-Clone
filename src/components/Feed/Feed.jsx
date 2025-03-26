import React, { useEffect, useState } from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";

const Feed = ({ category }) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const API_KEY = "AIzaSyAkV2u5kfrACZIT4KyzX2ozA0V4y7vc76o";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${category}&regionCode=US&maxResults=10&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.items) {
        setVideos(data.items);
      }
    } catch (error) {
      console.log("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [category]);
  return (
    <div className="feed">
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link
            to={`video/${video.id.videoId}`}
            key={video.id.videoId}
            className="card"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <h2>{video.snippet.title}</h2>
            <h3>{video.snippet.channelTitle}</h3>
            <p>
              Published on {new Date(video.snippet.publishedAt).toDateString()}
            </p>
          </Link>
        ))
      ) : (
        <>
         <Link to={`video/20/4521`} className="card">
        <img src={thumbnail1} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </Link>

      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail1} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>

      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>Best channel to learn coding that help you be a web developer</h2>
        <h3>Sadaat </h3>
        <p>19K views &bull; 2 days ago </p>
      </div>
        </>
      )}
     
    </div>
  );
};

export default Feed;
