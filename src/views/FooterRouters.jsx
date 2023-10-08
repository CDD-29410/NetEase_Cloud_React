import React from "react";
import { TabBar } from "antd-mobile";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  .adm-tab-bar-item-active {
    color: red;
    .adm-tab-bar-item-icon {
      height: 30px;
      width: 30px;
      padding: 2px;
      background-color: red;
      border-radius: 50%;
      color: #fff;
    }
  }
`;
export default function Footer() {
  const location = useLocation();

  const tabs = [
    {
      key: "Found",
      title: "发现",
      icon: <Icon icon="ri:netease-cloud-music-line" />,
      to: "/HomeView",
    },
    {
      key: "Blog",
      title: "博客",
      icon: <Icon icon="mingcute:radar-line" />,
      to: "/Podcasts",
    },
    {
      key: "Mine",
      title: "我的",
      icon: <Icon icon="iconamoon:music-2-light" />,
      to: "/Mine",
    },
    {
      key: "Concern",
      title: "关注",
      icon: <Icon icon="tabler:user-heart" />,
      to: "/Search",
    },
    {
      key: "Community",
      title: "社区",
      icon: <Icon icon="octicon:discussion-closed-24" />,
      to: "/Search",
    },
  ];

  const navigate = useNavigate();
  const toA = (props) => {
    navigate(tabs.find((item) => item.key === props).to);
  };
  return (
    <Div>
      <TabBar
        activeKey={location}
        onChange={toA}
        className="caret-transparent fixed bottom-0 left-0 right-0 bg-[#fff]"
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </Div>
  );
}
