import React from "react";
import { Icon } from "@iconify/react";
import SkeletonInf from "@/components/Skeleton";
import "@/index.css";
export default function HotTopic() {
  const HotTopicData = ["#129934", "#296EEB", "#32576c", "#2e2842"];
  return (
    <>
      <div className="my-[5vw] h-[55vw] overflow-hidden border-t border-solid border-[#ccc]">
        <div className="flex justify-between items-center text-[4vw] my-[5vw] font-extrabold">
          <p className="flex justify-between items-center text-[4vw]">
            热门话题
            <Icon icon="icon-park:right" width="5vw" height="5vw" />
          </p>
          <div>
            <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
          </div>
        </div>
        <div className=" ClearLine overflow-x-auto">
          {HotTopicData.length > 0 ? (
            <div className="flex justify-between w-[200vw]">
              {HotTopicData.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: item }}
                  className=" w-[60vw] h-[30vw] rounded-[2vw] px-[3vw] flex flex-col justify-evenly mr-[10vw]"
                >
                  <div className="flex text-[#fff] items-center">
                    <Icon
                      icon="icon-park-solid:topic"
                      width="5vw"
                      height="5vw"
                    />
                    <span className="text-[3vw]"> 最令你感动的那首情歌</span>
                  </div>
                  <span className="text-[2vw] text-[#ccc]">484万热度</span>
                  <div className="overflow-hidden h-[15vw] flex items-end justify-between">
                    <div className="text-[3vw] pr-[1vw] leading-[5vw] overflow-hidden line-clamp-2  w-[40vw] h-[10vw] text-[#fff]">
                      Saint-Denis:今日份的感动 “我希望我们两个之间的爱
                    </div>
                    <img
                      src="https://th.bing.com/th/id/OIP.a_2XJOKnYxsnGU-tYazCWwHaF7?pid=ImgDet&rs=1"
                      alt=""
                      className="h-[15vw] w-[15vw]"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <SkeletonInf />
          )}
        </div>
      </div>
    </>
  );
}
