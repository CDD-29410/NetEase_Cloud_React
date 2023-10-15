import React, { useState, useEffect, useRef } from "react";
import { Tag, ProgressBar, NoticeBar } from "antd-mobile";
import { Icon } from "@iconify/react";
import { featMvUrl, featMvDetail, featMvDetailInfo } from "@/request";

export default function MvPlaying(props) {
  const [MVPlay, setMVPlay] = useState(""); //MV数据
  const [MVPlayInf, setMVPlayInf] = useState(""); //MV详细数据
  const [Time, setTime] = useState(); //当前播放时间与总时间的百分比
  const [count, setcount] = useState(); //评论点赞数
  const [isPlay, setPlay] = useState(true); //播放/暂停
  const Ref = useRef();
  // const [isPlay, setIsPlay] = useState(true);
  useEffect(() => {
    featMvUrl(props.Data)
      .then((res) => {
        setMVPlay(res.data.data);
        featMvDetail(res.data.data.id)
          .then((res) => {
            console.log(res);
            setMVPlayInf(res.data.data);
          })
          .catch((err) => console.log(err));
        featMvDetailInfo(res.data.data.id)
          .then((res) => {
            console.log(res.data);
            setcount(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [props.Data]);

  setInterval(() => {
    if (Ref.current) {
      // 获取当前播放时间和总持续时间
      const currentTime = Ref.current.currentTime;
      const duration = Ref.current.duration;
      setTime((currentTime / duration).toFixed(2) * 100);
    }
  }, 1000);
  const playVid = () => {
    Ref.current.play();
  };
  const pauseVid = () => {
    Ref.current.pause();
  };

  return MVPlayInf ? (
    <>
      <div className="relative flex items-centers h-[56vw] justify-center mb-[5vw] mt-[50vw]">
        <video
          ref={Ref}
          src={MVPlay?.url}
          loop
          autoPlay
          onClick={() => {
            isPlay ? pauseVid() : playVid();
            setPlay(!isPlay);
          }}
        ></video>
        {isPlay === true ? null : (
          <Icon
            icon="el:play-alt"
            color="#ccc"
            className=" opacity-20 absolute top-[20%] text-[40vw]"
            onClick={() => {
              isPlay ? pauseVid() : playVid();
              setPlay(!isPlay);
            }}
          />
        )}
      </div>

      <div className="h-[70vw] relative">
        <div className="flex flex-col text-[#fff] absolute bottom-0 left-[4vw]">
          <div className="flex items-center h-[11vw] text-[#fff] text-[3.5vw]">
            <img
              src={MVPlayInf.artists[0].img1v1Url}
              alt=""
              className="h-[10vw] w-[10vw] border-[2px] border-[#fff] mr-1 rounded-[50%]"
            />
            <span className="mr-[1vw]">{MVPlayInf.artists[0].name}</span>
            <Tag round color="red" className="px-[2vw]">
              +
            </Tag>
          </div>
          <div className="flex items-center text-[3.5vw] mt-[2.5vw] w-[72vw]">
            <Tag className="mr-[1vw]">MV</Tag> {MVPlayInf.name}
          </div>
          <div className="text-[#848484] mt-[2.5vw] text-[2.5vw]">
            {MVPlayInf.publishTime}
          </div>
          <div className="flex items-center">
            <div className="w-[40%]">
              <NoticeBar
                content={`${MVPlayInf.name} - ${MVPlayInf.artistName}`}
                icon={<Icon icon="mingcute:music-2-fill" color="white" />}
                className=" border-transparent bg-transparent p-0"
              />
            </div>
            <Icon icon="mdi:heart-outline" color="white" />
          </div>
        </div>

        <div className="h-[70vw] flex flex-col items-center justify-between absolute top-0 right-[4vw] text-[#fff]">
          <div className="flex flex-col items-center ">
            <Icon
              icon="icon-park-solid:good-two"
              color="white"
              className=" text-[7.5vw]"
            />
            <span className="text-[3vw]">
              {(Math.round(count?.likedCount) / 10000).toFixed(1) > 0
                ? (Math.round(count?.likedCount) / 10000).toFixed(1) + "万"
                : count?.likedCount}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Icon
              icon="uil:comment-lines"
              color="white"
              className=" text-[7.5vw]"
            />
            <span className="text-[3vw] ">
              {(Math.round(count?.commentCount) / 10000).toFixed(1) > 0
                ? (Math.round(count?.commentCount) / 10000).toFixed(1) + "万"
                : count?.commentCount}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Icon
              icon="mingcute:share-forward-fill"
              color="white"
              className=" text-[7.5vw]"
            />
            <span className="text-[3vw]">
              {(Math.round(count?.shareCount) / 10000).toFixed(1) > 0
                ? (Math.round(count?.shareCount) / 10000).toFixed(1) + "万"
                : count?.shareCount}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Icon
              icon="solar:calendar-add-bold"
              color="white"
              className=" text-[7.5vw]"
            />
            <span className="text-[3vw]">收藏</span>
          </div>
          <img
            src={MVPlayInf.cover}
            alt=""
            className="h-[10vw] w-[10vw] rounded-[50%]"
          />
        </div>
      </div>
      <ProgressBar
        percent={Time}
        style={{
          "--track-width": "4px",
        }}
        className="my-[3vw]"
      />
    </>
  ) : null;
}
