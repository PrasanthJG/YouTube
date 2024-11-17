// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// const Layout = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const updateWidth = () => {
//       const width = window.innerWidth;
//       const widthLimit = 576;
//       const isMobile = width <= widthLimit;
//       const wasMobile = previousWidth <= widthLimit;

//       if (isMobile !== wasMobile) {
//         setIsOpen(!isMobile);
//       }

//       previousWidth = width;
//     };

//     let previousWidth = -1;

//     updateWidth();

//     window.addEventListener("resize", updateWidth);

//     return () => {
//       window.removeEventListener("resize", updateWidth);
//     };
//   }, []);
//   return (
//     <div>
//       <Navbar toggle={toggle} />
//       <Sidebar toggle={toggle} isOpen={isOpen} />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React, { useState } from "react";
import "./footer.css";
import img from "../../image/photo.jpg";
const Layout = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  
  return (
    <div className="Sidebar">
    <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
      <div className="top">
        <div className="logo">
          <i className="bi bi-list"></i>
          <span>sidebar</span>
        </div>
        <i className="bi bi-list" id="btn" onClick={toggleSidebar}></i>
      </div>
      <div className="user">
        <img src={img} alt="me" className="user-img" />
        <div>
          <p className="bold">clint B.</p>
          <p>Admin</p>
        </div>
      </div>
      <ul>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        <li>
          <a href="/">
            <i className="bi bi-grid"></i>
            <span className="nav-item">Dashboard</span>
          </a>
          <span className="tooltip_name">Dashboard</span>
        </li>
        
      </ul>
    </div>
    <div className="main-content">
      <div className="container">
        <h1>sidebarOpen</h1>
      </div>
    </div>
    </div>
  );
};

export default Layout;
