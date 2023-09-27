//Mine下部分
import React, { useState } from "react";
import { Icon } from "@iconify/react";
export default function MineInf() {
  const [isChange, setIsChange] = useState(false);
  return (
    <div
      style={isChange !== true ? { height: "45vw" } : { height: "75vw" }}
      className="relative  w-[92vw] mx-[4vw]"
    >
      <div
        style={isChange !== true ? { height: "45vw" } : { height: "75vw" }}
        className="absolute bg-gradient-to-b pt-[15vw] from-[#F7F2EC] to-[#fff]  flex flex-col items-center rounded-[2vw] top-[-5vw] w-[100%] bg-[#fff]"
      >
        <img
          src=""
          alt=""
          className="w-[18vw] h-[18vw] bg-[#000] absolute rounded-full top-[-9vw]"
        />
        <div className=" text-[#95999F] flex items-center text-[3.16vw]">
          <span className="mr-[4.7vw]">关注</span>
          <span className="mr-[4.7vw]">粉丝</span>
          <span className="">Lv.</span>
        </div>
        <div className="flex items-center text-[3.16vw] mt-[3.6vw]">
          <span className="mr-[1.5vw] border border-[#CCCCCD] p-[1vw] rounded-[1.5vw]">
            湖北武汉
          </span>
          <span className="border border-[#CCCCCD] p-[1vw] rounded-[1.5vw]">
            村龄
          </span>
        </div>
        <div className="flex items-center text-[3.16vw] mt-[3.6vw]">
          <span className="mr-[1.5vw] h-[7.5vw] border border-[#CCCCCD] py-[1.5vw] px-[3.1vw] rounded-[3.75vw]">
            编辑资料
          </span>
          <Icon
            icon="bytesize:chevron-top"
            onClick={() => {
              setIsChange(!isChange);
              console.log(isChange);
            }}
            style={
              isChange === true
                ? {
                    transform: "rotate(180deg)",
                  }
                : null
            }
            className="text-[7vw] transition border border-[#CCCCCD] p-[1vw] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
