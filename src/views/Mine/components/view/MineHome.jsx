import React from "react";
export default function MineHome() {
  const MineHomeInf = [
    { key: "MineHome", title: "我的喜欢", BGC: "#FEE7EA" },
    { key: "MineDynamic", title: "累计听歌", BGC: "#FAF4DA" },
    { key: "MinePodcasts", title: "步骤关键词", BGC: "#EBF1F9" },
  ];
  return (
    <>
      <div className="w-[100%] h-[50vw] p-[5vw] bg-[#fff] rounded-[2vw]">
        <span className="font-[600] text-[5vw]">音乐风味</span>
        <div className="flex justify-between">
          {MineHomeInf.map((item, index) => (
            <div
              key={index}
              style={{ borderColor: item.BGC }}
              className="flex flex-col justify-between w-[26vw] h-[30vw] border text-[#999] text-[12px] p-[2vw] "
            >
              <div>
                <span>{item.title}</span>
                <p className="text-[4vw] font-[600] text-[#333]">1111</p>
              </div>
              <p>1111</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
