//Mine上部分
import React, { useRef } from "react";
import { Swiper } from "antd-mobile";
const HeaderInfs = ["照片墙", "性格泡泡", "年度报告", "村民证"];
const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className="h-[80vw]" style={{ background: color }}></div>
  </Swiper.Item>
));
export default function Header() {
  const HeaderInf = useRef("0");
  return (
    <>
      <Swiper
        indicator={() => (
          <div className=" absolute top-[4%] flex  left-[45%]">
            <div className="h-[5vw] px-[2vw] rounded-full bg-[#fff] text-[.1vw]">
              {HeaderInfs[HeaderInf.current]}
            </div>
          </div>
        )}
      >
        {items}
      </Swiper>
    </>
  );
}
