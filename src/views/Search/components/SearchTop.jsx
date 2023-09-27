import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { SearchBox } from "@/request";

const menu = {
  menuNav: [
    {
      icon: "octicon:person-fill-24",
      text: "歌手",
    },
    {
      icon: "clarity:book-solid",
      text: "曲风",
    },
    {
      icon: "fluent-emoji-high-contrast:musical-notes",
      text: "专区",
    },
    {
      icon: "ph:microphone-fill",
      text: "识曲",
    },
  ],
  like: ["笼", "我想念", "法老", "张杰", "爱情转移"],
};
export default function SearchTop() {
  // onchange = () => {};
  useEffect(() => {
    SearchBox()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="bg-[rgb(248,249,253)] dark:bg-[#1a1c23] p-[3vw] overflow-hidden">
        <div className="fixed w-[100%] left-0 top-0 bg-[#fff] pt-[3vw] z-[999]">
          {/* <!-- 搜索框 --> */}
          <div className="w-[100vw] h-[10vw] flex justify-between px-[3vw] items-center box-border">
            {/* <!-- 返回图标 --> */}
            <NavLink to="/">
              <Icon
                icon="ph:arrow-left-light"
                width="8vw"
                className="text-[#000] dark:text-[#e9e9e9]"
              />
            </NavLink>
            {/* <!-- 搜索框 --> */}
            <div className="relative">
              <input
                onChange={() => {
                  console.log("111");
                }}
                type="text"
                className="text-[3vw] bg-white opacity-0.2  w-[75vw] h-[8vw] border-[1px] rounded-[3vw] pl-[10vw] dark:bg-[#31333a] dark:text-[#e9e9e9]  dark:border-[1px] dark:border-[#31333a]"
              />
              <Icon
                icon="circum:search"
                width="5vw"
                height="5vw"
                className="absolute left-[3.68vw] top-[2vw] text-[#000] dark:text-[#e9e9e9]"
              />
            </div>
            <div className="font-semibold leading-[8vw] text-[4vw] dark:text-[#e9e9e9] text-[#283349]">
              搜索
            </div>
          </div>
          <div className="flex justify-around mt-[3vw]">
            {menu.menuNav.map((item, index) => (
              <div
                key={index}
                className="flex items-center w-[25vw] h-[8vw] justify-center border-r border-[#E6E8ED]"
              >
                <Icon icon={item.icon} color="red" width="5vw" />
                <div className="ml-[2vw] text-[3vw] text-[#000] dark:text-[#e9e9e9]">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-around mt-[3vw]">
          {menu.like.map((item, index) => (
            <div
              key={index}
              className="flex items-center w-[25vw] h-[8vw] justify-center border-r border-[#E6E8ED]"
            >
              <Icon icon={item.icon} color="red" width="5vw" />
              <p className="ml-[2vw] text-[3vw] text-[#000] dark:text-[#e9e9e9]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-[15vw] text-[5vw] text-center h-[20vw] leading-[20vw] bg-cyan-500 text-[#924424]">
          这是一个广告哦
        </div>
        <div className="mt-[5vw]">
          <div className="flex justify-between">
            <h1 className="font-semibold text-[4vw] text-[#283349]">
              搜索历史
            </h1>
            <Icon
              icon="fa6-regular:trash-can"
              width="5vw"
              color="#acafae"
              height="5vw"
            />
          </div>
          <div className="flex">
            {menu.like.map((item, index) => (
              <div
                key={index}
                className="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* <!-- 猜你喜欢 --> */}
        <div className="mt-[5vw]">
          <div className="flex justify-between">
            <h1 className="font-semibold text-[4vw] text-[#283349] dark:text-[#e9e9e9]">
              猜你喜欢
            </h1>
            <Icon icon="ic:baseline-refresh" color="#acafae" width="5vw" />
          </div>
          <div className="flex">
            {menu.like.map((item, index) => (
              <div
                key={index}
                className="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
