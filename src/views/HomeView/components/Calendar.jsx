// 音乐日历
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import { startTime } from "@/request";
import "@/index.css";
export default function Detail() {
  const [DetailData, setDetailData] = useState([]);
  useEffect(() => {
    startTime()
      .then((res) => {
        setDetailData(res.data.data.calendarEvents);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="my-[5vw] mb-[5vw] border-t border-solid border-[#ccc]">
        <div className="flex justify-between items-center text-[4vw] my-[5vw] font-extrabold">
          <p className="flex justify-between items-center text-[4vw] ">
            音乐日历
            <span className="text-[2vw] bg-[#ccc] flex justify-between items-center pl-[1vw] ml-[1vw] rounded-[2vw]">
              今日{DetailData.length}条
              <Icon icon="icon-park:right" width="5vw" height="5vw" />
            </span>
          </p>
          <div>
            <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
          </div>
        </div>
        <div>
          <ul className="shadow-xl p-[1vw] rounded-[2vw]">
            {DetailData.map((item, index) => (
              <li
                key={index}
                className="flex justify-between w-[90vw] mb-[2vw]"
              >
                <div className="flex flex-col w-[60vw] text-[2vw] p-[1vw]">
                  <p>
                    {dayjs(item.onlineTime).format("hh:mm")}
                    <span className="text-[red] ml-[2vw]">{item.tag}</span>
                  </p>
                  <p className="text-[3vw] text-[800]]">{item.title}</p>
                </div>
                <div className="w-[5vw]"></div>
                <img src={item.imgUrl} alt="" className="w-[15vw] h-[15vw]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
