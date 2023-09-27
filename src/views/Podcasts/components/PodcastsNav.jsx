import React from "react";
import dayjs from "dayjs";
import { Icon } from "@iconify/react";
import { Tabs } from "antd-mobile";
import PodcastsInf from "./PodcastsInf";
import styled from "styled-components";

const Div = styled.div`
  .adm-tabs-tab-active {
    color: red !important;
  }
  .adm-tabs-tab-line {
    background: red !important;
  }
`;

export default function PodcastsNav() {
  const nav = ["内地", "港台", "欧美", "韩国", "日本"];
  return (
    <Div>
      <Tabs>
        {nav.map((item, index) => (
          <Tabs.Tab title={item} key={index}>
            <div className="flex items-center text-[3.5vw] py-[3vw]">
              <span>更新时间：{dayjs(new Date()).format("MM-DD")}</span>
              <Icon
                icon="ri:error-warning-line"
                color="#999"
                className="ml-[1vw]"
              />
            </div>
            <PodcastsInf data={item} />
          </Tabs.Tab>
        ))}
      </Tabs>
    </Div>
  );
}
