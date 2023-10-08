import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { Popup } from "antd-mobile";
import MarqueeInf from "./views/MarqueeInf.jsx";
import Menulist from "./views/Menulist.jsx";
import Playlists from "./views/Playlists.jsx";
import NewSong from "./views/NewSong.jsx";
import Detail from "./views/Detail.jsx";
import HotTopic from "./views/HotTopic.jsx";
import Calendar from "./views/Calendar.jsx";
import SideBar from "./components/Sidebar.jsx";
import Footer from "../FooterRouters.jsx";

const HomeView = () => {
  const [visible3, setVisible3] = useState(false);
  return (
    <>
      <div className="pb-[20vw] ">
        <div className=" caret-transparent p-[3vw] bg-gradient-to-b from-[#8174c8] to-[#fff]">
          <div className="flex justify-between items-center">
            <div
              onClick={() => {
                setVisible3(true);
              }}
            >
              <Icon icon="material-symbols:menu" width="8vw" height="8vw" />
            </div>
            <Popup
              visible={visible3}
              onMaskClick={() => {
                setVisible3(false);
              }}
              position="left"
              bodyStyle={{ width: "86vw" }}
            >
              <SideBar />
            </Popup>
            <NavLink to="/Search" className="flex items-center relative">
              <input
                type="text"
                className=" outline-red-300 border-[1px] w-[80vw] h-[8vw] border-[#ccccdb] text-[3vw] rounded-[3vw] pl-[10vw] bg-gradient-to-r from-[#ccccdb] to-[#F0DFEC]"
                placeholder="雨一直下"
              />
              <Icon
                icon="tabler:scan"
                width="5vw"
                height="5vw"
                className="absolute right-[3vw]"
              />
              <Icon
                icon="circum:search"
                width="5vw"
                height="5vw"
                className="absolute left-[2vw]"
              />
            </NavLink>
            <NavLink to="/bar">
              <Icon icon="ph:microphone-light" width="8vw" height="8vw" />
            </NavLink>
          </div>
          {/* 轮播 */}
          <MarqueeInf />

          {/* 菜单 */}
          <Menulist />

          {/* 推荐歌单 */}
          <Playlists />

          {/* 新歌速递 */}
          <NewSong />

          {/* 排行榜 */}
          <Detail />

          {/* 热门话题 */}
          <HotTopic />

          {/* 音乐日历 Calendar */}
          <Calendar />

          <Footer />
        </div>
      </div>
    </>
  );
};
export default HomeView;
