import React from "react";
import "../../Page1/page.css";
import data from "../../data/Database.json";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";

const Home = () => {
  return (
    <div className="home">
      <div className="row">
        {data.map((item) => (
          <div className="col-name" key={item.id}>
            <div className="home-container">
              <Link to="">
                <div className="home-video">
                  <div className="home-video-img">
                    <img
                      src={item["video.src"]}
                      alt={item["video.alt"]}
                      className="song"
                    />
                  </div>
                  <div className="home-video-thumbnail">
                    <div className="home-video-thumbnail-overlay">
                      <div className="home-thumbnail-overlay-time-status">
                        <div className="home-badge-shape-wiz">
                          {item["time-span"]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="details">
                <div className="media-channel">
                  <Link to="/">
                    <img
                      src={item["image.src"]}
                      alt={item["image.alt"]}
                      className="channel-thumbnail-icon"
                    />
                  </Link>
                </div>
                <div className="home-media">
                  <div className="home-media-item">
                    <Link to="/watch?v=Vl25xZGjo_Q">
                      <div className="home-media-item-headline">
                        <span
                          className="link-span"
                          aria-label={item["video.description"]}
                        >
                          {item["video.description"]}
                        </span>
                      </div>
                      <div className="home-media-item-details">
                        <span className="home-media-item-byline">
                          {item["image.description"]}
                        </span>
                        <br />
                        <span className="home-separator">•</span>
                        <span className="home-media-item-views">
                          {item["image.views"]}
                        </span>
                        <span className="home-separator">•</span>
                        <span className="home-media-item-time">
                          {item["image.hours"]}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <button
                    className="icon-button"
                    aria-label="Action menu"
                    aria-haspopup="true"
                    type="submit"
                  >
                    <CiMenuKebab />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
