import React from "react";
import { Icon } from "@iconify/react";
import MarqueeInf from "./components/MarqueeInf.jsx";
import Menulist from "./components/Menulist.jsx";
import Playlists from "./components/Playlists.jsx";
import NewSong from "./components/NewSong.jsx";
import Detail from "./components/Detail.jsx";
import HotTopic from "./components/HotTopic.jsx";
import Calendar from "./components/Calendar.jsx";

const HomeView = () => {
  return (
    <div className="pb-[20vw]">
      <div className=" caret-transparent p-[3vw] bg-gradient-to-b from-[#8174c8] to-[#fff]">
        <div className="flex justify-between items-center">
          <div>
            <Icon icon="material-symbols:menu" width="8vw" height="8vw" />
          </div>
          <div className="flex items-center relative">
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
          </div>
          <Icon icon="ph:microphone-light" width="8vw" height="8vw" />
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
      </div>
    </div>
  );
};
export default HomeView;
