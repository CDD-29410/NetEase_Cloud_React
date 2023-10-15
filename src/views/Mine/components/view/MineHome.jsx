import React from "react";
import { Icon } from "@iconify/react";
export default function MineHome() {
  const MineHomeInf = [
    {
      title: "我的喜欢",
      inf: "喜欢的音乐",
      text: "111",
      style: {
        borderColor: "#FEE7EA",
        background: "linear-gradient(#FEE7EA, #FEF5F6)",
      },
      icon: <Icon icon="mdi:heart" />,
    },
    {
      title: "累计听歌",
      inf: "听歌的排行",
      text: "111",
      style: {
        borderColor: "#FAF4DA",
        background: "linear-gradient(#FAF4DA, #FDFBF0)",
      },
      icon: <Icon icon="fluent:list-16-filled" rotate={3} />,
    },
    {
      title: "步骤关键词",
      inf: "黑胶时光机",
      text: "111",
      style: {
        borderColor: "#EBF1F9",
        background: "linear-gradient(#EBF1F9, #F6F9FC)",
      },
      icon: <Icon icon="eos-icons:hourglass" />,
    },
  ];
  return (
    <>
      <div className="w-[100%] h-[50vw] p-[5vw] bg-[#fff] rounded-[2vw]">
        <span className="font-[600] text-[5vw]">音乐风味</span>
        <div className="flex justify-between">
          {MineHomeInf.map((item, index) => (
            <div
              key={index}
              style={item.style}
              className="flex rounded-[2vw] flex-col justify-between w-[26vw] h-[30vw] border text-[#999] text-[12px] p-[2vw] "
            >
              <div>
                <div className="h-[5vw]">{item.title}</div>
                <p className="text-[4vw]  line-clamp-2 font-[600] text-[#333]">
                  {item.text}
                </p>
              </div>
              <div className="flex items-center truncate">
                {item.icon}
                <span>{item.inf}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
