import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Swiper } from "antd-mobile";
import { personalized } from "@/request/index";
import SkeletonInf from "@/components/Skeleton";
import { useNavigate } from "react-router-dom";
import { Kebabs } from "../components/Kebabs";

const Div = styled.div`
  .lunbo::-webkit-scrollbar {
    height: 0px;
    width: 20px;
  }
`;

const Playlists = () => {
  const navigate = useNavigate();
  const [Playlist, setPlaylist] = useState([]); //展示部分
  const [PlaylistData, setPlaylistData] = useState([]); //轮播部分获取点击后id
  useEffect(() => {
    personalized()
      .then((res) => {
        setPlaylist(res.data.result.slice(0, 6));
        setPlaylistData(res.data.result.slice(6, 12));
      })
      .catch((err) => console.log(err));
  }, []);
  const verticalItems = PlaylistData.map((item, index) => (
    <Swiper.Item key={index}>
      <div>
        <img src={item.picUrl} alt="" className="w-[32vw] h-[32vw]" />
      </div>
    </Swiper.Item>
  ));
  const verticalName = PlaylistData.map((item, index) => (
    <Swiper.Item key={index}>
      <div className="w-[32vw] line-clamp-2 h-[11vw]">{item.name}</div>
    </Swiper.Item>
  ));
  return (
    <Div>
      <div className="mt-[5vw]">
        <div className="flex justify-between items-center text-[4vw] my-[5vw] font-extrabold">
          <p
            className="flex justify-between items-center text-[4vw]"
            onClick={() => navigate("/PlaylistSquare")}
          >
            推荐歌单
            <Icon icon="icon-park:right" width="5vw" height="5vw" />
          </p>

          <Kebabs />
        </div>

        <div className="h-[45vw] mt-[2vw] overflow-hidden">
          {PlaylistData.length > 0 ? (
            // ref={wrapperRef}
            <div className="lunbo overflow-x-auto">
              <div className=" w-[250vw] flex justify-between relative">
                <div className="absolute h-[11vw] bottom-[0vw] line-clamp-2 left-[0vw]">
                  {PlaylistData.length > 0 ? (
                    <Swiper
                      autoplay
                      loop
                      allowTouchMove={false}
                      autoplayInterval="5000"
                      indicator={() => null}
                      className="w-[32vw] overflow-hidden"
                    >
                      {verticalName}
                    </Swiper>
                  ) : null}
                </div>
                <div className="w-[32vw] h-[32vw] overflow-hidden relative">
                  {PlaylistData.length > 0 ? (
                    <Swiper
                      autoplay
                      loop
                      allowTouchMove={false}
                      autoplayInterval="5000"
                      direction="vertical"
                      indicator={() => null}
                      style={{ "--height": "44vw" }}
                    >
                      {verticalItems}
                    </Swiper>
                  ) : null}
                  <Icon
                    icon="carbon:edt-loop"
                    color="#fff"
                    width="6.5vw"
                    height="6.5vw"
                    className=" absolute top-[2vw] right-[2vw]"
                  />
                </div>
                {Playlist.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(`/PlaylistsInf/${item.id}`);
                    }}
                  >
                    <div className="w-[32vw] h-[43vw]">
                      <div>
                        <div className="relative">
                          <img
                            src={item.picUrl}
                            alt=""
                            className="w-[32vw] h-[32vw]"
                          />
                          <p className="flex items-center absolute top-[2vw] right-[2vw]">
                            <Icon
                              icon="fa-solid:play"
                              color="white"
                              width="1.4vw"
                              height="1.8vw"
                            />
                            <span className="text-[2.3vw] text-[#fff] ml-[.5vw]">
                              {Math.round(item.playCount / 10000 / 10000) > 1
                                ? Math.round(item.playCount / 10000 / 10000) +
                                  "亿"
                                : Math.round(item.playCount / 10000) + "万"}
                            </span>
                          </p>
                          <Icon
                            icon="fa-solid:play"
                            color="white"
                            width="3.8vw"
                            height="4.4vw "
                            className="absolute right-[2vw] bottom-[2vw]"
                          />
                        </div>
                        <span className="text-[3vw] line-clamp-2">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <SkeletonInf />
          )}
        </div>
      </div>
    </Div>
  );
};
export default Playlists;
