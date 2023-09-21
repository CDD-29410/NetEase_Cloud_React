import React, { useEffect, useState } from "react";
import { Swiper } from "antd-mobile";
import { Icon } from "@iconify/react";
import { fetchToplistDetail } from "@/request";
export default function SearchNav() {
  const [SearchInf, setSearchInf] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlist = await fetchToplistDetail();
        // 在这里处理 playlist，例如将其存储到组件状态或进行其他操作
        setSearchInf(playlist.slice(0, 10));
      } catch (error) {
        console.error(error); // 处理错误情况
      }
    };
    fetchData(); // 调用 fetchData 函数来触发数据获取
  }, []); // 空数组作为第二个参数表示这个效果只会在组件加载时执行一次
  const items = SearchInf.map((item, index) => (
    <Swiper.Item key={index}>
      <div className=" mr-[2vw]" style={{ background: item }}>
        <div className="rounded-[2vw] bg-[#FFFFFF] px-[4vw]">
          {/* <!-- 标题开始 --> */}
          <div className="w-[100%] h-[12.422vw] flex items-center border-b-[2px] border-b-[#eaeaea] dark:border-b-[#43454c]">
            <span className="text-[4vw] text-[#000] dark:text-[#fff] mr-[3.359vw]">
              {item.name}
            </span>
            <div className="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]">
              <Icon
                icon="solar:play-bold"
                className="text-[#000] dark:text-[#fff] mr-[0.7vw] text-[2.6vw]"
              />
              <span className="text-[2.6vw] text-[#000] dark:text-[#fff]">
                播放
              </span>
            </div>
          </div>
          {/* <!-- 标题结束 --> */}
          <div className="py-[0.5vw]">
            {item.tracks.slice(0, 20).map((item, index) => (
              <div key={index} className="my-[2.7vw] flex items-center">
                <div
                  className={
                    index < 3
                      ? "text-[#ff2c41] text-[3.2vw] mr-[4vw]"
                      : "text-[#7d848d] text-[3.2vw] mr-[4vw]"
                  }
                >
                  {index + 1}
                </div>
                <div
                  className={
                    index < 3
                      ? "text-[3.2vw] text-[#000] dark:text-[#fff] mr-[1vw] truncate"
                      : "text-[3.2vw] text-[#7d848d] dark:text-[#fff] mr-[1vw] truncate"
                  }
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Swiper.Item>
  ));
  return (
    <>
      <div className="mt-[5vw]">
        {SearchInf.length > 0 ? (
          <Swiper slideSize={65} trackOffset={15} indicator={() => null}>
            {items}
          </Swiper>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
