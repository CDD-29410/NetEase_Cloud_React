//轮播
import React, { useEffect, useState } from "react";
import { Swiper } from "antd-mobile";
import { homepageBlockPage } from "../../../request/index";

export default function MarqueeInf() {
  const [Marquee, setMarquee] = useState([]);
  useEffect(() => {
    homepageBlockPage()
      .then((res) => setMarquee(res.data.data.blocks[0].extInfo.banners))
      .catch((err) => console.log(err));
  }, []);
  const items = Marquee.map((item, index) => (
    <Swiper.Item key={index}>
      <img src={item.pic} alt="" className=" w-[94vw] h-[39vw]" />
    </Swiper.Item>
  ));
  return (
    <div className="h-[39vw] mt-[5vw]">
      {Marquee && Marquee.length > 0 ? (
        <Swiper autoplay loop>
          {items}
        </Swiper>
      ) : (
        ""
      )}
    </div>
  );
}
