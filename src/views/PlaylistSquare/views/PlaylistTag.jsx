import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "antd-mobile";
import { getPlaylistCatList } from "@/request";
import { useRequest } from "ahooks";
import { Tag } from "antd-mobile";
import { Icon } from "@iconify/react";

export default function PlaylistTag(props) {
  const navigate = useNavigate();
  const [PlaylistCatList, setPlaylistCatList] = useState(); //歌单分类

  const { data: PlaylistCatListS } = useRequest(() => getPlaylistCatList());
  useEffect(() => {
    setPlaylistCatList(PlaylistCatListS?.data);
  }, [PlaylistCatListS]);

  const Categories = PlaylistCatList?.categories;
  const num = [0, 1, 2, 3, 4];
  return PlaylistCatList ? (
    <div>
      <NavBar
        onBack={() => {
          navigate("/PlaylistSquare");
        }}
      >
        歌单标签
      </NavBar>
      <div className="p-[3vw]">
        <span className="text-[4vw]">
          我的歌单广场<span className="text-[3vw]">(长按可以编辑)</span>
        </span>
        <div></div>
        {num.map((items, index) => (
          <div className="mt-[3vh]" key={index}>
            <span>{Categories[index]}</span>
            <div className=" flex flex-wrap">
              {PlaylistCatList?.sub.map((item, index) => (
                <div key={index}>
                  {item.category === items ? (
                    <Tag
                      round
                      color="#d3d1d1"
                      className="flex items-center justify-center text-center w-[21vw] mr-[2vw] my-[1vw] py-[2vw] text-[#000]"
                    >
                      {item.hot ? <Icon icon="bxs:hot" color="red" /> : null}
                      {item.name}
                    </Tag>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
