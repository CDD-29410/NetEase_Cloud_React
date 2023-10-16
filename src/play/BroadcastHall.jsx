import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { NoticeBar, Tag, ProgressBar, Popup } from "antd-mobile";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { getMP3 } from "@/request";

// import { useSelector, useDispatch } from "react-redux";
// import { isRotate } from "@/redux/slices/IsALL";

const Wrapper = styled.div`
  .adm-notice-bar .adm-notice-bar-content {
    justify-content: center;
  }
`;

const BroadcastHall = forwardRef((props, _ref) => {
  const [isPlay, setPlay] = useState(true);
  const [visible, setVisible] = useState(false); //弹出层是否开启
  const [SongUrl, getSongUrl] = useState(); //歌曲url
  const [Time, setTime] = useState(); //当前播放时间与总时间的百分比
  const [getCurrentTime, setCurrentTime] = useState(); //当前播放时间
  const [getDuration, setDuration] = useState(); //总持续时间
  const refSong = useRef(); //获取播放器

  // const Judgement = useSelector((state) => state.Judgement.Rotate);
  // console.log(Judgement.Rotate);
  // const dispatch = useDispatch();

  // 时间转换函数
  const formatTime = (time) => {
    time = parseInt(time);
    // 计算分钟和秒数
    const minute = Math.floor(time / 60);
    const second = Math.round(time % 60);

    return `${minute < 10 ? "0" + minute : minute}:${
      second < 10 ? "0" + second : second
    }`;
  };

  setInterval(() => {
    if (refSong.current) {
      // 获取当前播放时间和总持续时间
      const currentTime = refSong.current.currentTime;
      const duration = refSong.current.duration;
      setCurrentTime(formatTime(currentTime));
      setDuration(formatTime(duration));
      setTime((currentTime / duration).toFixed(2) * 100);
    }
  }, 1000);

  useImperativeHandle(_ref, () => visible);

  useEffect(() => {
    if (props.id) {
      getMP3(props.id).then((res) => {
        getSongUrl(res.data.data[0].url);
      });
    }
    setVisible(props.visible);
  }, [props.id, props.visible]);
  return (
    <>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        bodyStyle={{ height: "100vh" }}
        bodyClassName="fixed bottom-0"
      >
        {/* <button
          type="button"
          className="h-[10vh]"
          onClick={() => {
            console.log(1111);
            dispatch(isRotate());
          }}
        >
          点击
        </button>
        <br />
        {Judgement} */}
        <div
          style={{
            backgroundRepeat: "no-repeat center",
            backgroundImage: `url(
                ${props.data?.al.picUrl}
              )`,
          }}
          className=" bg-center "
        >
          <div className="backdrop-blur border-t p-[4vw] flex flex-col justify-between h-[100vh]">
            <div>
              <div className=" h-[10vh] text-[7vw] flex items-center justify-between">
                <Icon
                  icon="ps:down"
                  color="white"
                  onClick={() => setVisible(false)}
                />
                <Wrapper className="flex flex-col items-center justify-evenly ">
                  <NoticeBar
                    icon=""
                    content={props.data?.name}
                    className="text-[4.7vw] bg-transparent justify-center border-transparent text-[#fff] w-[60vw]"
                  />
                  <p className="text-[4vw] text-[#D5BE9A]">
                    {props.data?.ar.length > 0
                      ? props.data.ar.map((items, index) => (
                          <span key={index} className=" justify-center">
                            {index === props.data.length - 1
                              ? items.name + "/"
                              : items.name}
                          </span>
                        ))
                      : null}
                    <Tag round color="#2db7f5">
                      关注
                    </Tag>
                  </p>
                </Wrapper>
                <Icon icon="carbon:share" color="white" />
              </div>
              <div className=" flex flex-col items-center relative">
                <img
                  src="/static/needle-ab.png"
                  alt=""
                  style={isPlay ? { rotate: "-30deg" } : { rotate: "-10deg" }}
                  className="h-[30vh] absolute top-[2vh] left-[44vw] transform  origin-[14.74%_14.74%]  z-[999]"
                />
                <div className="h-[40vh] w-[40vh] mt-[10vh] flex flex-col items-center relative ">
                  <img
                    src="/static/play1.png"
                    alt=""
                    className="h-[40vh] rounded-[50%]"
                  />
                  <img
                    src={props.data?.al.picUrl}
                    alt=""
                    className="h-[31vh]  w-[31vh] rounded-[50%] absolute top-[5vh]"
                  />
                </div>
              </div>
            </div>
            <div className=" w-[92vw]">
              {/* 功能类  */}
              <div className="h-[10vw] text-[6.5vw] flex items-center justify-around">
                <Icon icon="mdi:heart-outline" color="white" />
                <Icon icon="line-md:downloading-loop" color="white" />
                <span className="px-[1vw] border-[.6vw] rounded-[50%] text-[3vw] text-[#fff]">
                  唱
                </span>
                <Icon icon="uil:comment-lines" color="white" />
                <Icon icon="ri:more-2-fill" color="white" />
              </div>

              <audio ref={refSong} src={SongUrl} loop autoPlay></audio>
              {/* 进度条 */}

              <div className="flex items-center justify-between mt-[8vw] text-[#D8B08E] text-[2vw] ">
                <div>{getCurrentTime}</div>
                <div className="w-[80%]">
                  <ProgressBar
                    percent={Time}
                    style={{
                      "--track-width": "4px",
                      "--text-width": "0",
                    }}
                  />
                </div>

                <div>{getDuration}</div>
              </div>
              {/* 播放键 */}
              <div className="h-[15vw] text-[6.5vw] flex items-center justify-around my-[7vw] ">
                {/* 循环  */}
                <Icon
                  className="mr-[1.5vw]"
                  icon="icon-park-outline:loop-once"
                  color="white"
                />
                {/* <!-- 上一首 --> */}
                <Icon icon="fluent:previous-16-filled" color="white" />
                <div
                  onClick={() => {
                    setPlay(!isPlay);
                  }}
                >
                  {isPlay ? (
                    <Icon
                      icon="teenyicons:pause-small-solid"
                      className="bg-[#fff] rounded-[50%] text-[13vw]"
                    />
                  ) : (
                    <Icon
                      icon="teenyicons:play-small-solid"
                      className="bg-[#fff] rounded-[50%] text-[13vw]"
                    />
                  )}
                </div>
                {/* <!-- 下一首 --> */}
                <Icon icon="fluent:next-16-filled" color="white" />
                {/* <!-- 歌单 --> */}
                <Icon icon="iconamoon:playlist" color="white" />
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
});

export default BroadcastHall;
