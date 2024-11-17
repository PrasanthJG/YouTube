import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./page/Navbar/Navbar";
import Sidebar from "./page/Sidebar/Sidebar";
import Home from "./Page1/Home/Home";
import Shorts from "./Page1/Home/Shorts";
import Subscriptions from "./Page1/Home/Subscriptions";
import You from "./Page1/Home/You";
import Channel from "./Page1/You/Channel";
import History from "./Page1/You/History";
import Playlists from "./Page1/You/Playlists";
import Viedo from "./Page1/You/Viedo";
import Later from "./Page1/You/Later";
import Liked from "./Page1/You/Liked";
import Trending from "./Page1/Explore/Trending";
import Shopping from "./Page1/Explore/Shopping";
import Music from "./Page1/Explore/Music";
import Films from "./Page1/Explore/Films";
import Live from "./Page1/Explore/Live";
import Gaming from "./Page1/Explore/Gaming";
import News from "./Page1/Explore/News";
import Sport from "./Page1/Explore/Sport";
import Courses from "./Page1/Explore/Courses";
import Beauty from "./Page1/Explore/Beauty";
import Podcasts from "./Page1/Explore/Podcasts";
import Premium from "./Page1/YouTube/Premium";
import Studio from "./Page1/YouTube/Studio";
import MusicYou from "./Page1/YouTube/MusicYou";
import Kids from "./Page1/YouTube/Kids";
import Setting from "./Page1/Setting/Setting";
import HistoryYou from "./Page1/Setting/HistoryYou";
import Help from "./Page1/Setting/Help";
import FeedbackYou from "./Page1/Setting/FeedbackYou";


const App = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };

   return (
     <BrowserRouter>
       <div>
         <Navbar toggleSidebar={toggleSidebar} />
         <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen}>
           <Routes>
             <Route path="/home" element={<Home />} />
             <Route path="/Shorts" element={<Shorts />} />
             <Route path="/Subscriptions" element={<Subscriptions />} />
             <Route path="/You" element={<You />} />
             <Route path="/yourchannel" element={<Channel />} />
             <Route path="/history" element={<History />} />
             <Route path="/playlists" element={<Playlists />} />
             <Route path="/yourvideos" element={<Viedo />} />
             <Route path="/watchlater" element={<Later />} />
             <Route path="/likedvideos" element={<Liked />} />
             <Route path="/trending" element={<Trending />} />
             <Route path="/shopping" element={<Shopping />} />
             <Route path="/music" element={<Music />} />
             <Route path="/films" element={<Films />} />
             <Route path="/live" element={<Live />} />
             <Route path="/gaming" element={<Gaming />} />
             <Route path="/news" element={<News />} />
             <Route path="/sport" element={<Sport />} />
             <Route path="/courses" element={<Courses />} />
             <Route path="/fashion&beauty" element={<Beauty />} />
             <Route path="/podcasts" element={<Podcasts />} />
             <Route path="/premium" element={<Premium />} />
             <Route path="/studio" element={<Studio />} />
             <Route path="/musics" element={<MusicYou />} />
             <Route path="/kids" element={<Kids />} />
             <Route path="/setting" element={<Setting />} />
             <Route path="/historyYou" element={<HistoryYou />} />
             <Route path="/help" element={<Help />} />
             <Route path="/feedback" element={<FeedbackYou />} />
           </Routes>
         </Sidebar>
       </div>
       
     </BrowserRouter>
   );
};

export default App;

// import React, { useState } from 'react'
// import Layout from './page/Layout'
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

// const App = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//      const toggleSidebar = () => {
//        setIsSidebarOpen(!isSidebarOpen);
//      };
//   return (
//     <div>
//       <Layout toggleSidebar={toggleSidebar} active={isSidebarOpen} />
//     </div>
//   );
// }

// export default App