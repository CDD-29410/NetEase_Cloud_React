//歌单广场
import React from "react";
import { NavBar, Tabs } from "antd-mobile";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { GoodPlayList } from "./views/goodPlayList";

import { useNavigate } from "react-router-dom";
const Div = styled.div`
  .adm-tabs-content {
    width: 100vw;
  }
`;

export default function PlaylistSquare() {
  const navigate = useNavigate();

  const title = ["精品", "华语", "电子", "共享歌单", "轻音乐", "摇滚", "民谣"];

  return (
    <div>
      <NavBar
        onBack={() => {
          navigate("/");
        }}
      >
        歌单广场
      </NavBar>
      <Div className="flex justify-between">
        <Tabs defaultActiveKey="0">
          {title.map((item, index) => (
            <Tabs.Tab title={item} key={index}>
              <GoodPlayList cat={item} />
            </Tabs.Tab>
          ))}
        </Tabs>
        <Icon
          icon="icon-park-outline:more-app"
          className=" translate-y-[-2px] m-[12px] mt-[2vw] text-[28px] ]"
          onClick={() => navigate("/PlaylistTag")}
        />
      </Div>
    </div>
  );
}
