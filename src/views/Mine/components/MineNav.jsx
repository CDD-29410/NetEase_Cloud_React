//Mine标签栏
import React, { useRef, useState } from "react";
import { Tabs, Swiper } from "antd-mobile";
import styled from "styled-components";
import MineHome from "./view/MineHome";
import MineDynamic from "./view/MineDynamic";
import MinePodcasts from "./view/MinePodcasts";
const Div = styled.div`
  .adm-tabs-tab-active {
    color: #333 !important;
  }
  .adm-tabs-tab-line {
    background: red !important;
  }
  .adm-tabs-tab {
    color: #999;
  }
`;

export default function MineNav() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const tabItems = [
    { key: "MineHome", title: "主页", Inf: <MineHome /> },
    { key: "MineDynamic", title: "动态", Inf: <MineDynamic /> },
    { key: "MinePodcasts", title: "博客", Inf: <MinePodcasts /> },
  ];
  return (
    <Div className="sticky">
      <Tabs
        activeKey={tabItems[activeIndex].key}
        onChange={(key) => {
          const index = tabItems.findIndex((item) => item.key === key);
          setActiveIndex(index);
          swiperRef.current?.swipeTo(index);
        }}
      >
        {tabItems.map((item) => (
          <Tabs.Tab title={item.title} key={item.key} />
        ))}
      </Tabs>
      <Swiper
        direction="horizontal"
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveIndex(index);
        }}
      >
        {tabItems.map((item, index) => (
          <Swiper.Item key={index}>
            <div className="p-[4vw] flex flex-col items-center text-[24px] select-none">
              {item.Inf}
            </div>
          </Swiper.Item>
        ))}
      </Swiper>
    </Div>
  );
}
