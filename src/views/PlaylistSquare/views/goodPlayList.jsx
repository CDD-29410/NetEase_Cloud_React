import React, { useState } from "react";
import { useRequest } from "ahooks";
import { getPlaylistHighQuality } from "@/request";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

export const GoodPlayList = (props) => {
  const [CatList, setCatList] = useState();

  const cat = props.cat === "精品" ? "" : props.cat;

  const { data: PlaylistHighQualityS } = useRequest(() =>
    getPlaylistHighQuality(cat)
  );

  useEffect(() => {
    setCatList(PlaylistHighQualityS?.data);
  }, [PlaylistHighQualityS]);
  return CatList ? (
    <>
      {props.cat === "精品" ? (
        <div className=" text-[3.5vw] py-[3vw] flex justify-between items-center">
          <div>全部精品</div>
          <span>筛选</span>
        </div>
      ) : null}
      <div className="flex flex-wrap items-center justify-between">
        {CatList?.playlists?.map((item, index) => (
          <div key={index} className="w-[30%] h-[20vh] relative">
            <img src={item.coverImgUrl} alt="" className="w-[100%]" />
            <p className="line-clamp-2">{item.name}</p>
            <div className="flex justify-between items-center px-[2vw] opacity-[.8] rounded-full text-[#fff] absolute top-[1vw] right-[1vw] bg-[#666] ">
              <Icon icon="grommet-icons:play" />
              <span>
                {(item.playCount / 10000).toFixed(0) > 1
                  ? (item.playCount / 10000).toFixed(0) + "万"
                  : item.playCount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : null;
};
