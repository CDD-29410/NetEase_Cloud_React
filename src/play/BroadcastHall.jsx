import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { NoticeBar, Tag, ProgressBar, Popup } from "antd-mobile";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const Wrapper = styled.div`
  .adm-notice-bar .adm-notice-bar-content {
    justify-content: center;
  }
`;

const BroadcastHall = forwardRef((props, _ref) => {
  const [isPlay, setPlay] = useState(true);
  const [visible, setVisible] = useState(false); //弹出层是否开启

  useImperativeHandle(_ref, () => visible);
  useEffect(() => {
    setVisible(props.visible);
  }, [props.num]);
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
        <div className=" bg-[#81541A] border-t p-[4vw]">
          <div className="h-[15vw] text-[7vw] flex items-center justify-between">
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
              className="h-[40vw] absolute top-[5vw] left-[44vw]  transform  origin-[14.74%_14.74%]  z-[999]"
            />
            <div className="h-[75vw] w-[75vw] mt-[30vw] flex flex-col items-center relative ">
              <img
                src="/static/play1.png"
                alt=""
                className="h-[75vw] rounded-[50%]  "
              />
              <img
                src={props.data?.al.picUrl}
                alt=""
                className="h-[55vw]  w-[55vw] rounded-[50%] absolute top-10"
              />
            </div>
          </div>
          <div className="mt-[35vw] w-[92vw]">
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
            {/* 进度条 */}

            <div className=" mt-[8vw] text-[#D8B08E] text-[2vw] ">
              <ProgressBar
                percent={50}
                style={{
                  "--track-width": "4px",
                }}
              />
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
                  console.log(props.visible);
                }}
              >
                {isPlay ? (
                  <Icon
                    icon="teenyicons:play-small-solid"
                    className="bg-[#fff] rounded-[50%] text-[13vw]"
                  />
                ) : (
                  <Icon
                    icon="teenyicons:pause-small-solid"
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
      </Popup>
    </>
  );
});

export default BroadcastHall;
