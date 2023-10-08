import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { NoticeBar, Skeleton } from "antd-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import { playlistDetail, playlistTrackAll } from "@/request";

const PlaylistsInf = () => {
  let location = useLocation().pathname.split("/")[2];
  const [ListsInf, setListsInf] = useState(); // 歌单数据
  const [playlistTrack, setPlaylistTrack] = useState(); // 歌单所有歌曲数据
  const [isChange, setIsChange] = useState(false); //是否旋转
  const navigate = useNavigate();
  useEffect(() => {
    playlistTrackAll(location)
      .then((res) => {
        // console.log(res.data.songs);
        setPlaylistTrack(res.data.songs);
      })
      .catch((err) => console.log(err));
    playlistDetail(location)
      .then((res) => {
        // console.log(res.data.playlist);
        setListsInf(res.data.playlist);
      })
      .catch((err) => console.log(err));
  }, [location]);

  const listsInf = [
    {
      icon: "majesticons:share",
      context:
        ListsInf?.shareCount / 10000 > 0
          ? (ListsInf?.shareCount / 10000).toFixed(2) + "万"
          : ListsInf?.shareCount,
    },
    {
      icon: "iconamoon:comment-dots-fill",
      context:
        ListsInf?.commentCount / 10000 > 0
          ? (ListsInf?.commentCount / 10000).toFixed(2) + "万"
          : ListsInf?.commentCount,
    },
    {
      icon: "solar:calendar-add-bold",
      context:
        ListsInf?.subscribedCount / 10000 > 0
          ? (ListsInf?.subscribedCount / 10000).toFixed(2) + "万"
          : ListsInf?.subscribedCount,
    },
  ];
  const colors = ["#254d4d", "#393e6c", "#955c5c", "#5b3045", "#608655"];
  const color = colors[Math.floor(Math.random() * 5)];
  return ListsInf ? (
    <div style={{ backgroundColor: color }} className=" pt-[3vw]">
      <div className="w-[100vw] z-[999] sticky top-0">
        <div
          style={{ backgroundColor: color }}
          className="flex items-center justify-between w-[100vw] pr-[3vw] h-[13vw]"
        >
          <NoticeBar
            content={ListsInf.name}
            style={{
              "--border-color": "transparent",
              "--font-size": "18px",
            }}
            icon={
              <Icon
                icon="solar:arrow-left-linear"
                color="white"
                width="6vw"
                height="5vw"
                onClick={() => navigate("/")}
              />
            }
            className="bg-transparent w-[64vw] text-[#fff]"
          />
          <div className="flex items-center justify-between h-[5vw]">
            <Icon
              icon="iconamoon:search"
              color="white"
              width="5vw"
              height="5vw"
            />
            <Icon
              icon="fontisto:more-v-a"
              color="white"
              width="5vw"
              height="5vw"
              className="ml-[8vw]"
            />
          </div>
        </div>
      </div>
      {/* 上半部分 */}
      <div className="relative">
        <Icon
          icon="ph:caret-down-bold"
          onClick={() => {
            setIsChange(!isChange);
            console.log(isChange);
          }}
          style={
            isChange === true
              ? {
                  transform: "rotate(180deg)",
                }
              : null
          }
          className="w-[5vw] h-[5vw] bg-[#787A81] absolute right-[4vw] text-[7vw] transition border border-[#CCCCCD] p-[1vw] rounded-full"
        />
        <div>
          <div className="flex mt-[5vw] px-[3vw]">
            <div className="flex">
              <img
                src={ListsInf.coverImgUrl}
                alt=""
                className="w-[24.5vw] h-[24.5vw] rounded-[2vw] "
              />
              <div className="ml-[3vw] flex flex-col">
                <div className="text-[3.5vw] text-[#F8F8F9] font-[700] line-clamp-2">
                  {ListsInf.name}
                </div>
                <div className="flex items-center mt-[2.5vw] ">
                  <img
                    src={ListsInf.creator.backgroundUrl}
                    alt=""
                    className="w-[5.8vw] h-[5.8vw] rounded-[50%]"
                  />
                  <span className="text-[2.8vw] text-[#BCBBC3] ml-[1.8vw]">
                    {ListsInf.creator.nickname}
                  </span>
                  <div className="text-[2.3vw] text-[#C4C3CB] ml-[1vw] w-[11vw] h-[5vw] leading-[5vw] bg-[#7B7A82] text-center rounded-[2.5vw]">
                    <span className="mr-[1vw]">+</span>关注
                  </div>
                </div>
                <div className="mt-[2.2vw] flex ">
                  {ListsInf.tags.map((item, index) => (
                    <div
                      className="mr-[2vw] px-[1.4vw]  h-[4vw] bg-[#84878E] flex items-center justify-evenly rounded-[1vw] "
                      key={index}
                    >
                      <span className="text-[2.3vw] text-[#F0EFF7]">
                        {item}
                      </span>
                      <Icon
                        icon="teenyicons:right-outline"
                        color="white"
                        width="2vw"
                        height="2vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[4.4vw] flex justify-between items-center px-[3vw]">
            <span className=" text-[2.78vw] w-[90vw] text-[#C0C2C9] truncate">
              {ListsInf.description}
            </span>
            <Icon
              icon="teenyicons:right-outline"
              color="white"
              width="3vw"
              height="3vw"
            />
          </div>
        </div>

        <div className="flex items-center overflow-hidden justify-between mt-[4.4vw] px-[3vw]">
          {listsInf.map((item, index) => (
            <div
              key={index}
              style={
                index === listsInf.length - 1
                  ? { backgroundColor: "red" }
                  : null
              }
              className="w-[28.6vw] h-[10vw] text-center leading-[10vw] rounded-[5vw] bg-[#999] flex items-center justify-center"
            >
              <Icon icon={item.icon} color="white" width="4vw" height="4vw" />
              <div className="ml-[1.7vw] text-[#FFF7FA] text-[2.5vw]">
                {item.context}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 下半部分 */}
      <div className="mt-[4.5vw] pt-[3vw] bg-gradient-to-b from-[#E0E0E1] to-[#fff] rounded-t-[2vw]">
        <div
          className="flex items-center px-[3vw] justify-between w-[100vw] h-[13vw] bg-[#E0E0E1] sticky top-[13vw]"
          type="info"
        >
          <div className="flex items-center ">
            <Icon icon="gridicons:play" color="red" width="5vw" height="5vw" />
            <span
              onClick={() => console.log("播放全部")}
              className="ml-[3.7vw] text-[3.7vw] font-extrabold"
            >
              播放全部
            </span>
            <span className="ml-[1.5vw] text-[2.8vw] text-[#BAB9B9]">
              {"(" + ListsInf.trackCount + ")"}
            </span>
          </div>
          <div className="flex items-center">
            <Icon icon="lucide:arrow-down-to-line" width="5vw" height="5vw" />
            <Icon
              icon="solar:list-down-linear"
              width="5vw"
              height="5vw"
              className="ml-[5vw]"
            />
          </div>
        </div>
        <div className="px-[3vw]">
          {playlistTrack?.map((item, index) => (
            <div key={index} onClick={() => console.log(item.name)}>
              <div className="flex items-center justify-between h-[15vw]">
                <div className="text-[3.6vw] w-[5vw] text-center text-[#A4A4A4]">
                  {index + 1}
                </div>
                <div className="w-[70vw] flex flex-col ml-[4vw]">
                  <span className="text-[3vw] font-[700] truncate">
                    {item.name}
                    {item.alia.length > 0 ? (
                      <span className="text-[#999] ml-[2vw]">
                        ({item.alia})
                      </span>
                    ) : null}
                    {item?.tns?.length > 0 ? (
                      <span className="text-[#999] ml-[2vw]">({item.tns})</span>
                    ) : null}
                  </span>
                  <p className="ml-[.5vw] h-[4vw] text-[3vw] truncate text-[#8A8B83]">
                    <span className="text-[#D3C68C] text-[1.6vw] border-[.1vw] border-[#EDEEE6] rounded-[1vw]">
                      超清
                    </span>
                    {item.ar.length > 0
                      ? item.ar.map((items, index) => (
                          <span key={index}>
                            {index ? items.name + "/" : items.name}
                          </span>
                        ))
                      : null}
                    <span>—</span>
                    <span>{item.al.name}</span>
                  </p>
                </div>
                <Icon icon="arcticons:fpt-play" width="4vw" height="4vw" />
                <Icon
                  icon="fontisto:more-v-a"
                  color="#A4A4A4"
                  width="4vw"
                  height="4vw"
                  className="ml-[6vw] mr-[1vw]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-[20%]">
      <div onClick={() => navigate("/")}>数据加载过慢点击返回主页</div>
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
    </div>
  );
};
export default PlaylistsInf;
