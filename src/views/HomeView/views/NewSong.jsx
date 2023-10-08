import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Space, Swiper } from "antd-mobile";
import { homepageBlockPage } from "@/request/index";
import SkeletonInf from "@/components/Skeleton";
import styled from "styled-components";
const Div = styled.div`
  .adm-swiper-horizontal .adm-swiper-track-inner {
    width: 90vw;
  }
`;
export default function NewSong() {
  const [newSongData, setNewSongData] = useState([]);
  useEffect(() => {
    homepageBlockPage()
      .then((res) => {
        // console.log(res.data.data.blocks[5]?.creatives);
        setNewSongData(res.data.data.blocks[5]?.creatives);
      })
      .catch((err) => console.log(err));
  }, []);
  const items = newSongData.map((item, index) => (
    <Swiper.Item key={index}>
      <div key={index}>
        <div className="w-[80vw]">
          {item?.resources.map((item, index) => (
            <div
              key={index}
              className="flex mr-[10px] justify-between w-[80vw] h-[13vw] my-[3vw]"
            >
              <div className="flex">
                <img
                  src={item.uiElement.image.imageUrl}
                  alt=""
                  className="w-[14vw] h-[13vw] mr-[3vw]"
                />
                <div className="flex flex-col justify-between w-[60vw] h-[13vw]">
                  <p className="font-semibold h-[6vw] overflow-hidden text-[4vw] leading-[6vw]">
                    {item.uiElement.mainTitle.title}
                  </p>
                  <div className="h-[6vw] overflow-hidden leading-[6vw] text-[#7B7E87]">
                    <span className="text-[3vw]">
                      {item.uiElement.subTitle.title}
                    </span>
                    {item.uiElement.subTitle.title !== "" ? (
                      <span className="text-[3vw] ml-[2vw]">——</span>
                    ) : null}
                    {item.resourceExtInfo.artists.map((item, index) => (
                      <span className="text-[3vw]" key={index}>
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Swiper.Item>
  ));
  return (
    <>
      <div className="mt-[5vw] h-[70vw] overflow-hidden border-t border-solid border-[#ccc]">
        <div className="flex justify-between items-center text-[4vw] font-extrabold my-[5vw]">
          <p className="flex justify-between items-center text-[4vw]">
            新歌速递
            <Icon icon="icon-park:right" width="5vw" height="5vw" />
          </p>
          <div>
            <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
          </div>
        </div>
        {newSongData.length > 0 ? (
          <Div className="h-[51vw]">
            <Space direction="vertical" block>
              <Swiper
                indicator={() => null}
                stuckAtBoundary={false}
                slideSize={90}
                defaultIndex={0}
              >
                {items}
              </Swiper>
            </Space>
          </Div>
        ) : (
          <SkeletonInf />
        )}
      </div>
    </>
  );
}
