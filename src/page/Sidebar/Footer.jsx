// import React from 'react'
// import "./footer.css"
// import { MdHomeFilled } from 'react-icons/md';
// import { MdOutlineSubscriptions } from "react-icons/md";
// import { SiYoutubeshorts } from 'react-icons/si';
// import { BiSolidVideos } from 'react-icons/bi';
// const Footer = () => {
//   return (
//     <div className="footer" id="footerOpen">
//     <div >
//       <MdHomeFilled className="icon" />
//       <span className='footer_name'>Home</span>
//       </div>
//       <div>
//       <SiYoutubeshorts className="icon" />
//       <span className='footer_name'>Shorts</span>
//       </div>
//       <div>
//       <MdOutlineSubscriptions className="icon" />
//       <span className='footer_name'>Subscriptions</span>
//       </div>
//       <div>
//       <BiSolidVideos className="icon" />
//       <span className='footer_name'>You</span>
//       </div>
//     </div>
//   );
// }

// export default Footer

import React, { useState } from 'react'
import "./footer.css"
import { BiSolidVideos } from 'react-icons/bi';
import { MdHomeFilled, MdOutlineSubscriptions } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';

const Footer = () => {
  const [navCollapse, setNavCollapse] = useState(false);
  const [smallNavCollapse, setsmallNavCollapse] = useState(false);
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">
          <h2>Code With Yousaf</h2>
          <i
            className="bi bi-justify largeDeviceIcon"
            onClick={(e) => setNavCollapse(!navCollapse)}
          ></i>
          <i
            className="bi bi-justify smallDeviceIcon"
            onClick={(e) => setsmallNavCollapse(!smallNavCollapse)}
          ></i>
        </div>
        <ul>
          <li>Home</li>
          <li>New Blog</li>
        </ul>
      </nav>

      <aside>
        <div className="sidebar-content">
          <div
            className={`${
              smallNavCollapse ? "smallNav" : ""
            } sidebar-container ${navCollapse ? "navCollapse" : ""}`}
          >
            <div className="nav-option option1">
              <MdHomeFilled className="icon" />
              <h5>Home</h5>
            </div>
            <div className="nav-option option1">
              <SiYoutubeshorts className="icon" />
              <h5>Shorts</h5>
            </div>
            <div className="nav-option option1">
              <MdOutlineSubscriptions className="icon" />
              <h5>Subscriptions</h5>
            </div>
            <div className="nav-option option1">
              <BiSolidVideos className="icon" />
              <h5>You</h5>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Footer

// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       <p>
//         About Press Copyright <br/> Contact us Creator Advertis <br/> Developers 
//         Terms
//       </p>
//       <p>
//         Privacy Policy & Safety <br/>How YouTube works <br/>Test new features 
//         </p>
//         <p>© 2024 Google LLC</p>
//     </div>
//   );
// }

// export default Footer