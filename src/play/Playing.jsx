import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { ProgressCircle, NoticeBar, Popup } from "antd-mobile";
import PlayList from "./PlayList";

export default function Playing() {
  const [playVisible, setPlayVisible] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  return (
    <>
      <div className="z-[999] h-[14vw] w-[100vw] py-[2.5vw] flex justify-between items-center fixed bottom-0 bg-[#FBFEFE] border-t">
        <div className="w-[10vw] h-[10vw] ml-[4vw] relative">
          {/* @click="BroadcastHall */}
          <img
            src="player._currentTrack?.al?.picUrl"
            alt=""
            className="w-[8vw] rounded-[50%] absolute top-[1vw] left-[1vw]"
          />
          <img
            src="/static/play1.png"
            alt=""
            className="w-[10vw] rounded-[50%] absolute"
          />
        </div>

        <NoticeBar
          content="歌名 - 明星"
          icon=""
          className="text-[3.5vw] px-0 w-[55vw]  bg-transparent border-transparent text-[#333] font-[600] "
        />

        <div className="flex justify-between items-center">
          <div onClick={() => setIsPlay(!isPlay)} className="relative mr-[5vw]">
            {isPlay ? (
              // 播放
              <Icon icon="ph:play-fill" width="6vw" />
            ) : (
              // 暂停
              <Icon icon="ph:pause-fill" width="6vw" />
            )}

            {/* <!-- 环形进度条 --> */}
            <ProgressCircle
              percent={80}
              style={{ "--size": "10vw" }}
              className=" absolute top-[-2vw] left-[-2vw]"
            />
          </div>
          <Icon
            onClick={() => setPlayVisible(true)}
            icon="iconamoon:playlist"
            width="8vw"
            className="mr-[2.2vw] "
          />
        </div>
        <Popup
          visible={playVisible}
          onMaskClick={() => {
            setPlayVisible(false);
          }}
          onClose={() => {
            setPlayVisible(false);
          }}
          bodyStyle={{ height: "70vh" }}
        >
          <PlayList />
        </Popup>
      </div>
    </>
  );
}
