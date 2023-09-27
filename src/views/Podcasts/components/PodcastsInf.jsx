import React, { useEffect, useState } from "react";
import { MVRanking } from "@/request";
import { Skeleton } from "antd-mobile";
export default function PodcastsInf(props) {
  const [PodcastsData, setPodcastsData] = useState([]);
  useEffect(() => {
    MVRanking(props.data)
      .then((res) => {
        console.log(res.data.data);
        setPodcastsData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [props.data]);
  return PodcastsData.length > 1 ? (
    <>
      {PodcastsData.map((item, index) => (
        <div key={index}>
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
              <p className="text-[#666] text-[4vw]">111</p>
            </div>
          </div>
        </div>
      ))}
    </>
  ) : (
    <Skeleton animated className="w-[100%] h-[70vw]" />
  );
}
