import React, { useEffect, useState, useRef, createContext } from "react";
import { Icon } from "@iconify/react";
import { NoticeBar, Skeleton, Popup, Toast, NavBar, Tabs } from "antd-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import {
  playlistDetail,
  playlistTrackAll,
  musicSlider,
  getCommentPlaylist,
} from "@/request";
import BroadcastHall from "@/play/BroadcastHall";
import Playing from "@/play/Playing";
import { PopupFn } from "./Popup";
import styled from "styled-components";
import { IsRecommend } from "./CommentPlaylist";

const Div = styled.div`
  .adm-tabs-tab-list {
    width: 40vw;
    margin-left: 55vw;
  }
  .adm-tabs-header {
    background-color: #fff;
    position: sticky;
    top: 0;
  }
  .adm-tabs-content {
    padding: 0;
    width: 92vw;
  }
`;

const MyContext = createContext();
const PlaylistsInf = () => {
  let location = useLocation().pathname.split("/")[2];
  const [ListsInf, setListsInf] = useState(); // 歌单数据
  const [playlistTrack, setPlaylistTrack] = useState(); // 歌单所有歌曲数据
  const [isChange, setIsChange] = useState(true); //是否旋转
  const [visible, setVisible] = useState(false); //弹出层是否开启
  const [songID, setSongID] = useState(); //歌曲信息
  const [num, setNum] = useState(true); //设置切换值
  const [moreInf, setMoreInf] = useState([]); //设置更多
  const [KebabsVisible, setKebabsVisible] = useState(false); // 烤肉串菜单
  const [KebabsVisibleMore, setKebabsVisibleMore] = useState(false); // 烤肉串排序
  const [KebabsVisibleReport, setKebabsVisibleReport] = useState(false); // 烤肉串举报
  const [CommentPlaylist, setCommentPlaylist] = useState(false); // 歌单评论
  const [Comments, setComments] = useState(false); //是否显示评论
  const [isCollection, SetCollection] = useState(false); //是否收藏

  const { data: setListsInfS } = useRequest(() => playlistDetail(location));
  const { data: playlistTrackAllS } = useRequest(() => {
    return playlistTrackAll(location);
  }); // 歌单所有歌曲数据

  const { data: getCommentPlaylistS } = useRequest(() =>
    getCommentPlaylist(location)
  ); // 歌单评论
  const { data: setMoreInfS } = useRequest(() => musicSlider(location)); //获取更多

  const navigate = useNavigate();

  const Ref = useRef();

  useEffect(() => {
    setListsInf(setListsInfS?.data.playlist);
    setPlaylistTrack(playlistTrackAllS?.data.songs);
    setMoreInf(setMoreInfS?.data.playlists); //更多
    setVisible(Ref.current);
    setCommentPlaylist(getCommentPlaylistS?.data); //歌单评论
  }, [
    getCommentPlaylistS,
    location,
    playlistTrackAllS?.data.songs,
    setListsInfS?.data.playlist,
    setMoreInfS?.data.playlists,
  ]);

  const ColorNum = location.slice(0, 6);

  const listsInf = [
    {
      icon: (
        <Icon icon="majesticons:share" color="white" width="4vw" height="4vw" />
      ),
      context:
        ListsInf?.shareCount / 10000 > 1
          ? (ListsInf?.shareCount / 10000).toFixed(1) + "万"
          : ListsInf?.shareCount,
    },
    {
      icon: (
        <Icon
          icon="iconamoon:comment-dots-fill"
          color="white"
          width="4vw"
          height="4vw"
        />
      ),
      context:
        ListsInf?.commentCount / 10000 > 1
          ? (ListsInf?.commentCount / 10000).toFixed(1) + "万"
          : ListsInf?.commentCount,
    },
    {
      icon: (
        <Icon
          icon={isCollection ? "healthicons:yes-outline" : "formkit:add"}
          color="white"
          width="4vw"
          height="4vw"
        />
      ),
      context:
        ListsInf?.subscribedCount / 10000 > 1
          ? (ListsInf?.subscribedCount / 10000).toFixed(1) + "万"
          : ListsInf?.subscribedCount,
    },
  ];

  const KebabsInf = [
    {
      icon: <Icon icon="line-md:downloading-loop" />,
      text: "选择歌曲排序",
    },
    {
      icon: <Icon icon="fluent-mdl2:delete" />,
      text: "清空下载文件",
    },
    {
      icon: <Icon icon="basil:info-triangle-outline" />,
      text: "举报",
    },
  ];
  const KebabsSort = [
    {
      icon: <Icon icon="ph:hand-tap-light" color="red" />,
      text: "默认排序",
    },
    {
      icon: <Icon icon="fa6-solid:a" color="red" />,
      text: "按单曲名排序",
    },
    {
      icon: <Icon icon="cil:album" color="red" />,
      text: "按专辑名排序",
    },
    {
      icon: <Icon icon="ant-design:user-switch-outlined" color="red" />,
      text: "按歌手名排序",
    },
  ];
  const report = [
    {
      text: "政治反动",
    },
    {
      text: "淫秽色情",
    },
    {
      text: "违法信息",
    },
    {
      text: "恶意攻击谩骂",
    },
    {
      text: "营销广告",
    },
    {
      text: "虚假信息",
    },
    {
      text: "低俗",
    },
    {
      text: "其他",
    },
  ];

  return ListsInf ? (
    <MyContext.Provider value={playlistTrack}>
      <div style={{ backgroundColor: `#${ColorNum}` }} className=" pt-[3vw]">
        <div className="w-[100vw] z-[999] sticky top-0">
          <div
            style={{ backgroundColor: `#${ColorNum}` }}
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
                onClick={() => setKebabsVisible(true)}
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
          {isChange ? (
            <>
              <div className="flex mt-[5vw] px-[3vw]">
                <div className="flex">
                  <img
                    src={ListsInf.coverImgUrl}
                    alt=""
                    className="w-[24.5vw] h-[24.5vw] rounded-[2vw] "
                  />
                  <div className="ml-[3vw] flex flex-col mr-[8vw]">
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
            </>
          ) : (
            <div className="px-[3vw] mt-[5vw]">
              <span className="text-[#c6c3c3]">喜欢这个歌单的用户也听了</span>
              <div className="flex overflow-auto">
                {moreInf?.map((item, index) => (
                  <div
                    className="w-[28vw] mr-[2.5vw]"
                    key={index}
                    onClick={() => {
                      setIsChange(!isChange);
                      navigate(`/PlaylistsInf/${item.id}`);
                      window.location.reload();
                    }}
                  >
                    <div className="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
                      <img
                        src={item.coverImgUrl}
                        alt=""
                        className="w-[28vw] h-[28vw] rounded-[8px] relative z-[1]"
                      />
                    </div>
                    <p className="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center overflow-hidden justify-between mt-[4.4vw] px-[3vw]">
            {listsInf.map((item, index) => (
              <div
                key={index}
                onClick={() => (
                  index === 1 ? setComments(true) : null,
                  SetCollection(!isCollection)
                )}
                style={
                  index === listsInf.length - 1
                    ? { backgroundColor: "red" }
                    : null
                }
                className="w-[28.6vw] h-[10vw] text-center leading-[10vw] rounded-[5vw] bg-[#999] flex items-center justify-center"
              >
                {item.icon}
                <div className="ml-[1.7vw] text-[#FFF7FA] text-[2.5vw]">
                  {item.context}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 下半部分 */}
        <div className=" mt-[4.5vw] pt-[3vw] bg-gradient-to-b from-[#E0E0E1] to-[#fff] rounded-t-[2vw]">
          <div
            className="flex items-center px-[3vw] justify-between w-[100vw] h-[13vw] bg-[#E0E0E1] sticky top-[13vw]"
            type="info"
          >
            <div className="flex items-center ">
              <Icon
                icon="gridicons:play"
                color="red"
                width="5vw"
                height="5vw"
              />
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
              <div
                key={index}
                onClick={() => {
                  setVisible(true);
                  setNum(!num);
                  setSongID(item);
                }}
              >
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
                        <span className="text-[#999] ml-[2vw]">
                          ({item.tns})
                        </span>
                      ) : null}
                    </span>
                    <p className="ml-[.5vw] h-[4vw] text-[3vw] truncate text-[#8A8B83]">
                      <span className="text-[#D3C68C] text-[1.6vw] border-[.1vw] border-[#EDEEE6] rounded-[1vw]">
                        超清
                      </span>
                      {item.ar.length > 0
                        ? item.ar.map((items, index) => (
                            <span key={index}>
                              {index === item.length - 1
                                ? items.name + "/"
                                : items.name}
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
          <Playing />
        </div>
        <BroadcastHall
          ref={Ref}
          id={songID?.id}
          data={songID}
          show={num}
          visible={visible}
        />
        <Popup
          visible={KebabsVisible}
          onMaskClick={() => {
            setKebabsVisible(false);
          }}
          position="right"
          bodyStyle={{ width: "50vw", height: "40vw" }}
        >
          <div className="p-[2vw] h-[100%] flex flex-col justify-between">
            {KebabsInf.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-[5vw] py-[2vw]"
                onClick={() =>
                  index === 0
                    ? (setKebabsVisibleMore(true), setKebabsVisible(false))
                    : index === 2
                    ? (setKebabsVisibleReport(true), setKebabsVisible(false))
                    : (Toast.show({
                        content: "删除成功",
                      }),
                      setKebabsVisible(false))
                }
              >
                {item.icon}
                <span className="pl-[2vw]">{item.text}</span>
              </div>
            ))}
          </div>
        </Popup>

        {/* 烤肉串排序 */}
        <Popup
          visible={KebabsVisibleMore}
          onMaskClick={() => {
            setKebabsVisibleMore(false);
          }}
          bodyStyle={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            minHeight: "40vh",
          }}
        >
          <PopupFn data={KebabsSort} func={setKebabsVisibleMore} />
        </Popup>

        {/* 举报 */}
        <Popup
          visible={KebabsVisibleReport}
          onMaskClick={() => {
            setKebabsVisibleReport(false);
          }}
          bodyStyle={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            minHeight: "40vh",
          }}
        >
          <PopupFn data={report} func={setKebabsVisibleReport} />
        </Popup>

        {/* 评论 */}
        <Popup
          visible={Comments}
          onMaskClick={() => {
            setComments(false);
          }}
          bodyStyle={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            minHeight: "93vh",
          }}
        >
          {CommentPlaylist ? (
            <div className="bg-[#f5f5f5] h-[93vh]  overflow-hidden overflow-y-auto ">
              <NavBar
                backArrow={false}
                right={
                  <div className="flex items-center justify-end">
                    <Icon icon="ri:share-circle-line" className="text-[5vw]" />
                  </div>
                }
              >
                评论({CommentPlaylist.total})
              </NavBar>

              <div className="flex bg-[#fff] items-center justify-between h-[15vh] px-[4vw]">
                <img
                  src={ListsInf.coverImgUrl}
                  alt=""
                  className="w-[10vh] h-[10vh]"
                />
                <div className=" w-[60vw]">
                  <div className="text-[4.5vw] line-clamp-2 ">
                    {ListsInf.name}
                  </div>
                  <div>
                    by
                    <span className="ml-[2vw] text-[#5f5fd3]">
                      {ListsInf.creator?.nickname}
                    </span>
                  </div>
                </div>
                <Icon icon="teenyicons:right-outline" />
              </div>
              <div className="bg-[#fff] mt-[1vw] pt-[1vh] px-[4vw]">
                <div className="flex  items-center justify-between h-[10vh] ">
                  <div className="w-[25vw]">111</div>
                  <Icon icon="teenyicons:right-outline" />
                </div>
                <div className=" h-[.1px] bg-[#333]" />
                <div className="flex items-center h-[5vh] justify-between">
                  <span className="text-[#999]">轻触评价</span>
                </div>
              </div>
              <div className="relative bg-[#fff] mt-[1vw] pt-[1vh] px-[4vw]">
                <div className="absolute text-[4.5vw]">评论区</div>
                <Div className="w-[100vw]">
                  <Tabs
                    style={{
                      "--title-font-size": "12px",
                    }}
                  >
                    <Tabs.Tab title="推荐" key="fruits">
                      <IsRecommend data={CommentPlaylist.hotComments} />
                    </Tabs.Tab>
                    <Tabs.Tab title="最新" key="vegetables">
                      <IsRecommend data={CommentPlaylist.comments} />
                    </Tabs.Tab>
                    <Tabs.Tab title="最热" key="animals">
                      <IsRecommend data={CommentPlaylist.hotComments} />
                    </Tabs.Tab>
                  </Tabs>
                </Div>
              </div>
            </div>
          ) : null}
        </Popup>
      </div>
    </MyContext.Provider>
  ) : (
    <div className="mt-[20%]">
      <div onClick={() => navigate("/")}>数据加载过慢点击返回主页</div>
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
    </div>
  );
};
export default PlaylistsInf;
