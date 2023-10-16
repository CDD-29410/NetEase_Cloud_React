import React, { useState } from "react";
import { useRequest } from "ahooks";
import { getPlaylistHighQuality, getPlaylistCatList } from "@/request";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { Popup, NavBar, Tag } from "antd-mobile";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Div = styled.div`
  .adm-nav-bar-left,
  .adm-nav-bar-right {
    flex: 0 !important;
  }
`;

export const GoodPlayList = (props) => {
  const navigate = useNavigate();
  const [CatList, setCatList] = useState();
  const [visible, setVisible] = useState(false);
  const [PlaylistCatList, setPlaylistCatList] = useState(); //歌单分类
  const cat = props.cat === "精品" ? "" : props.cat;
  const { data: PlaylistCatListS } = useRequest(() => getPlaylistCatList());

  const { data: PlaylistHighQualityS } = useRequest(() =>
    getPlaylistHighQuality(cat)
  );

  useEffect(() => {
    setPlaylistCatList(PlaylistCatListS?.data);
    setCatList(PlaylistHighQualityS?.data);
  }, [PlaylistCatListS?.data, PlaylistHighQualityS]);
  return CatList ? (
    <>
      {props.cat === "精品" ? (
        <div className=" text-[3.5vw] py-[3vw] flex justify-between items-center">
          <div>全部精品</div>
          <div
            className=" flex justify-between items-center"
            onClick={() => setVisible(true)}
          >
            <Icon icon="foundation:indent-more" />
            <span>筛选</span>
          </div>
        </div>
      ) : null}
      <div className="flex flex-wrap items-center justify-between">
        {CatList?.playlists?.map((item, index) => (
          <div
            key={index}
            className="w-[30vw] h-[40vw] relative"
            onClick={() => {
              navigate(`/PlaylistsInf/${item.id}`);
            }}
          >
            <img src={item.coverImgUrl} alt="" className="w-[30vw] h-[30vw]" />
            <p className="line-clamp-2 text-[3vw] ">{item.name}</p>
            <div className="flex justify-between items-center text-[3vw] px-[2vw] opacity-[.8] rounded-full text-[#fff] absolute top-[1vw] right-[1vw] bg-[#666] ">
              <Icon icon="grommet-icons:play" />
              <span>
                {(item.playCount / 10000).toFixed(0) > 1
                  ? (item.playCount / 10000).toFixed(0) + "万"
                  : item.playCount}
              </span>
            </div>
          </div>
        ))}
        <Popup
          visible={visible}
          onMaskClick={() => {
            setVisible(false);
          }}
          onClose={() => {
            setVisible(false);
          }}
          bodyStyle={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            minHeight: "50vh",
          }}
        >
          <Div className="mt-[1vw] px-[4vw]">
            <NavBar
              backArrow={false}
              right={
                <Icon
                  icon="ph:x-circle-duotone"
                  className="text-[6vw]"
                  onClick={() => setVisible(false)}
                />
              }
            >
              全部精品歌单
            </NavBar>
            <div className="h-[40vh] overflow-y-auto">
              <div className="w-[100%] rounded-full bg-[red] text-[#fff] text-center py-[2vw]">
                全部精品
              </div>
              <div className=" flex flex-wrap mt-[5vw]">
                {PlaylistCatList?.sub?.slice(0, 33).map((item, index) => (
                  <div key={index}>
                    <Tag
                      round
                      color="#ebe9e9"
                      className="flex items-center justify-center text-center w-[21vw] mr-[2vw] my-[3vw] py-[2vw] text-[#000]"
                    >
                      {item.name}
                    </Tag>
                  </div>
                ))}
              </div>
            </div>
          </Div>
        </Popup>
      </div>
    </>
  ) : null;
};
