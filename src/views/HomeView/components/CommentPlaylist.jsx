import React from "react";
import { Icon } from "@iconify/react";

export const IsRecommend = (props) => {
  return (
    <>
      {props?.data.map((item, index) => (
        <div className="flex flex-col pt-[2vh]" key={index}>
          <div className="flex items-center justify-between">
            <img
              src={item.user.avatarUrl}
              alt=""
              className="w-[5vh] h-[5vh] rounded-full"
            />
            <div className="w-[65vw]">
              {item.user.nickname} <br />
              <span className="text-[12px] text-[#999]"> {item.timeStr}</span>
            </div>
            <div className="flex items-center ">
              {item.likedCount}
              <Icon icon="iconamoon:like-thin" className="ml-[1vw]" />
            </div>
          </div>
          <div className="mt-[1vh] pb-[2vh] ml-[14vw] border-b-[1px]">
            {item.content}
          </div>
        </div>
      ))}
    </>
  );
};
