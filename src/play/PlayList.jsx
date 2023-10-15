import React from "react";
import { Icon } from "@iconify/react";
import { Tag } from "antd-mobile";

const PlayList = () => {
  return (
    <>
      <div className="fixed w-[100vw] p-[4vw] border-b bg-[#fff] rounded-t-[4vw] z-[999]">
        <div className="flex items-end">
          <span className="text-[4vw] font-[600]">当前播放</span>
          <span className="text-[3vw] text-[#999]">
            {/* {player.list?.length > 0 ? "(" + player.list?.length + ")" : null} */}
          </span>
        </div>
        <div className="flex items-center justify-between text-[4vw] mt-[5vw] text-[#999999]">
          <Tag round color="#f6f1f1" className="flex items-center ">
            <Icon
              className="mr-[1.5vw] text-[3vw]"
              icon="icon-park-outline:loop-once"
              color="#000"
            />
            <span className="text-[#000] text-[3vw]">列表循环</span>
          </Tag>

          <div className="flex items-center">
            <Icon
              icon="line-md:downloading-loop"
              className="mr-[5vw] text-[5vw]"
            />
            <Icon
              icon="solar:calendar-add-bold"
              className="mr-[5vw] text-[5vw]"
            />
            <Icon icon="mingcute:delete-2-line" />
          </div>
        </div>
      </div>
      <div className="mt-[25vw] px-[4vw]">
        <div>
          <div className="h-[11vw] flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/static/wave.gif"
                alt=""
                className="red-image h-[4vw]"
              />
              <p className="flex items-center truncate w-[60vw]">
                <span className="text-[4vw] ml-[3vw]">key2.name </span>
                <span
                  className="text-[3.2vw] self-end text-[#999] "
                  v-for="(key3,index) in key2.ar"
                  key="index"
                >
                  key3.name
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <span className="px-[1.5vw] rounded-[3vw] border-[#EFEFEF] border-[.2vw] text-[3.2vw] mr-[5vw]">
                来源
              </span>
              <Icon icon="cil:x" className="text-[3.5vw] text-[#999]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PlayList;
