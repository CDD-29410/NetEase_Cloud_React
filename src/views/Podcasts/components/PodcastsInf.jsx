import React, { useEffect, useState } from "react";
import { MVRanking } from "@/request";
import { Icon } from "@iconify/react";
import { Skeleton, Popup } from "antd-mobile";
import MvPlaying from "../view/MVPLay";

export default function PodcastsInf(props) {
  const [PodcastsData, setPodcastsData] = useState([]);
  const [visible, setVisible] = useState(false); //遮盖层是否关闭
  const [MvID, setMvID] = useState(false);
  useEffect(() => {
    MVRanking(props.data)
      .then((res) => {
        setPodcastsData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [props.data]);

  return PodcastsData.length > 1 ? (
    <>
      {PodcastsData.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setVisible(true);
            setMvID(item.id);
          }}
        >
          <img src={item.cover} alt="" className=" h-[52vw]" />
          <div className="flex items-centers  h-[16vw]">
            <div
              style={index < 3 ? { color: "red" } : { color: "#000" }}
              className="w-[10vw] text-[7vw] "
            >
              {index + 1}
            </div>
            <div className="flex truncate flex-col justify-evenly text-[5vw]">
              <span className=" font-[500] truncate">{item.name}</span>
              <div className="flex">
                {item.artists.map((items, index) => (
                  <p className="text-[#666] text-[4vw]" key={index}>
                    {item.artists.length === index + 1
                      ? items.name
                      : items.name + " / "}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        bodyStyle={{ height: "100vh" }}
        bodyClassName="fixed bottom-0"
      >
        <div className=" bg-[#000] h-[100vh] z-[999]">
          <div
            onClick={() => setVisible(false)}
            className="flex justify-between items-center p-[4vw] text-[7vw]"
          >
            <Icon icon="ph:arrow-left" color="white" />
            <div className="flex">
              <Icon
                icon="tabler:window-minimize"
                color="white"
                className="mr-[6vw]"
              />
              <Icon icon="mingcute:more-2-fill" color="white" />
            </div>
          </div>
          <MvPlaying Data={MvID} />
          <div className="text-[4vw] w-screen h-[10vw] py-[2vw] px-[4vw] text-[#2c2]">
            这么精彩不发条评论吗~
          </div>
        </div>
      </Popup>
    </>
  ) : (
    <Skeleton animated className="w-[100%] h-[70vw]" />
  );
}
