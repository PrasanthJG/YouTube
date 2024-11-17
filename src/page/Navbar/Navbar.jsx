import React, { useEffect, useRef } from 'react';
import image from "../../image/yt.png";
import image1 from "../../image/photo.jpg";
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > headerRef.current.offsetTop) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header id="header" ref={headerRef}>
        <nav className="navbar">
          <div className="logo_item">
            <Link
              className="link close-navbar"
              id="list_name "
              onClick={toggleSidebar}
            >
              <i className="bi bi-list"></i>
            </Link>
            {/* <Link to="/" className="link"> */}
            <img src={image} alt="Your Logo" className="image" />
            <span>
              <b>YouTube</b>
              <sup>IN</sup>
            </span>
            {/* </Link> */}
          </div>
          <div className="search_bar">
            <div className="input-group search_bar">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button className="button" type="button" id="button-addon2">
                <i className="bi bi-search"></i>
              </button>
            </div>

            <Link to="/" className="link link_name">
              <i className="bi bi-mic"></i>
            </Link>
          </div>
          <div className="navbar_content">
            <Link to="/" className="link">
              <i className="bi bi-camera-video"></i>
            </Link>
            <Link to="/" className="link">
              <i className="bi bi-bell"></i>
            </Link>
            <img src={image1} alt="Your_image" className="profile" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar