import React from "react";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdHistory,
  MdOutlinePlaylistPlay,
  MdOutlineWatchLater,
  MdOutlineWhatshot,
  MdOutlineOutlinedFlag,
} from "react-icons/md";
import {
  SiYoutubeshorts,
  SiYoutubegaming,
  SiYoutubemusic,
  SiYoutubestudio,
} from "react-icons/si";
import { BiSolidVideos, BiLike, BiBroadcast } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import { CiYoutube, CiStreamOn } from "react-icons/ci";
import { BsPersonSquare, BsBag } from "react-icons/bs";
import { IoMusicalNoteOutline, IoSettingsOutline } from "react-icons/io5";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { RiNewspaperLine } from "react-icons/ri";
import { GoTrophy } from "react-icons/go";
import { LiaLightbulbSolid } from "react-icons/lia";
import { TbHanger2, TbBrandYoutubeKids, TbMessageReport } from "react-icons/tb";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Sidebar = ({ isOpen, children }) => {
  return (
    <section className="Sidebar">
      <div className={`sidebar ${isOpen ? "open" : "close"}`} id="btn">
        <article className="sidebar_logo">
          <div className="menu_content" id="Sidear_lineName">
            <ul className="menu_items">
              <li>
                <Link className="link " to="/home">
                  <MdHomeFilled className="icon" />
                  <span className="nav-item">Home</span>
                </Link>
              </li>
              <li>
                <Link className="link " to="/shorts">
                  <SiYoutubeshorts className="icon" />
                  <span className="nav-item">Shorts</span>
                </Link>
              </li>
              <li>
                <Link className="link " to="/Subscriptions">
                  <MdOutlineSubscriptions className="icon" />
                  <span className="nav-item">Subscriptions</span>
                </Link>
              </li>
              <li id="youtube">
                <Link className="link link_name " to="/you">
                  <BiSolidVideos className="icon" />
                  <span className="nav-item">You</span>
                </Link>
              </li>
            </ul>
            <hr id="close" />
            <ul id="close">
              <li>
                <Link to="/you" className="link">
                  <h5 className="para ">
                    You
                    <AiOutlineRight className="icon" />
                  </h5>
                </Link>
              </li>
            </ul>
            <div id="close">
              <ul className="menu_items">
                <li>
                  <Link className="link" to="/yourchannel">
                    <BsPersonSquare className="icon" />
                    <span className="nav-item">Your channel</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/history">
                    <MdHistory className="icon" />
                    <span className="nav-item">History</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/playlists">
                    <MdOutlinePlaylistPlay className="icon" />
                    <span className="nav-item">Playlists</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/yourvideos">
                    <CiYoutube className="icon" />
                    <span className="nav-item">Your videos</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/watchlater">
                    <MdOutlineWatchLater className="icon" />
                    <span className="nav-item">Watch Later</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/likedvideos">
                    <BiLike className="icon" />
                    <span className="nav-item">Liked videos</span>
                  </Link>
                </li>
              </ul>
            </div>
            <hr id="close" />
            <h5 className="para" id="close">
              Explore
            </h5>
            <div id="close">
              <ul className="menu_items">
                <li>
                  <Link className="link " to="/trending">
                    <MdOutlineWhatshot className="icon" />
                    <span className="nav-item">Trending</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/shopping">
                    <BsBag className="icon" />
                    <span className="nav-item">Shopping</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/music">
                    <IoMusicalNoteOutline className="icon" />
                    <span className="nav-item">Music</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/films">
                    <PiFilmSlateDuotone className="icon" />
                    <span className="nav-item">Films</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/live">
                    <CiStreamOn className="icon" />
                    <span className="nav-item">Live</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/gaming">
                    <SiYoutubegaming className="icon" />
                    <span className="nav-item">Gaming</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/news">
                    <RiNewspaperLine className="icon" />
                    <span className="nav-item">News</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/sport">
                    <GoTrophy className="icon" />
                    <span className="nav-item">Sport</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/courses">
                    <LiaLightbulbSolid className="icon" />
                    <span className="nav-item">Courses</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/fashion&beauty">
                    <TbHanger2 className="icon" />
                    <span className="nav-item">Fashion & beauty</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/podcasts">
                    <BiBroadcast className="icon" />
                    <span className="nav-item">Podcasts</span>
                  </Link>
                </li>
              </ul>
            </div>
            <hr id="close" />
            <h5 className="para" id="close">
              More from YouTube
            </h5>
            <div id="close">
              <ul className="menu_items">
                <li>
                  <Link className="link " to="/premium">
                    <CiYoutube className="icon" />
                    <span className="nav-item">YouTube Premium</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/studio">
                    <SiYoutubestudio className="icon" />
                    <span className="nav-item">YouTube Studio</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/musics">
                    <SiYoutubemusic className="icon" />
                    <span className="nav-item">YouTube Music</span>
                  </Link>
                </li>
                <li>
                  <Link className="link " to="/kids">
                    <TbBrandYoutubeKids className="icon" />
                    <span className="nav-item">YouTube Kids</span>
                  </Link>
                </li>
              </ul>
            </div>
            <hr id="close" />
            <div id="close">
              <ul className="menu_items">
                <li>
                  <Link className="link" to="/setting">
                    <IoSettingsOutline className="icon" />
                    <span className="nav-item">Setting</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/historyYou">
                    <MdOutlineOutlinedFlag className="icon" />
                    <span className="nav-item">Report history</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/help">
                    <IoIosHelpCircleOutline className="icon" />
                    <span className="nav-item">Help</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="link"
                    to="/feedback"
                  >
                    <TbMessageReport className="icon" />
                    <span className="nav-item">Send feedback</span>
                  </Link>
                </li>
              </ul>
            </div>
            <hr id="close" />
            <div id="close">
              <p>
                About Press Copyright <br /> Contact us Creator Advertis <br />{" "}
                Developers Terms
              </p>
              <p>
                Privacy Policy & Safety <br />
                How YouTube works <br />
                Test new features
              </p>
              <p>© 2024 Google LLC</p>
            </div>
          </div>
        </article>
        <footer id="Sidebar_youtube">
          <ul id="sidebarOpen" className="menu_items">
            <li>
              <Link className="link " to="/home">
                <MdHomeFilled className="icon" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link className="link " to="/shorts">
                <SiYoutubeshorts className="icon" />
                <span>Shorts</span>
              </Link>
            </li>
            <li>
              <Link className="link " to="/Subscriptions">
                <MdOutlineSubscriptions className="icon" />
                <span>Subscriptions</span>
              </Link>
            </li>
            <li id="youtube">
              <Link className="link " to="/you">
                <BiSolidVideos className="icon" />
                <span>You</span>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
      <main className="name_main">{children}</main>
    </section>
  );
};

export default Sidebar;

// import React from "react";
// import { Link } from "react-router-dom";
// import SidebarData from "../../data/SidebarData.json";

// const Sidebar = ({ isOpen, children }) => {
//   return (
//     <section className="Sidebar">
//       <div className={`sidebar ${isOpen ? "open" : "close"}`} id="btn">
//         <article className="sidebar_logo">
//           <div className="menu_content" id="Sidear_lineName">
//             <ul className="menu_items">
//               {Object.keys(SidebarData.Sidebar.sidebarItems).map((key) => {
//                 const item = SidebarData.Sidebar.sidebarItems[key];
//                 return (
//                   <li key={key}>
//                     <Link className="link" to={item.link}>
//                       {item.icon} {/* Render icon directly */}
//                       <span className="nav-item">{item.text}</span>
//                     </Link>
//                     {item.subItems && (
//                       <ul className="sub-menu">
//                         {Object.keys(item.subItems).map((subKey) => {
//                           const subItem = item.subItems[subKey];
//                           return (
//                             <li key={subKey}>
//                               <Link className="link" to={subItem.link}>
//                                 {subItem.icon}{" "}
//                                 {/* Render subItem icon directly */}
//                                 <span className="nav-item">{subItem.text}</span>
//                               </Link>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </article>
//       </div>
//       <main className="name_main">{children}</main>
//     </section>
//   );
// };

// export default Sidebar;