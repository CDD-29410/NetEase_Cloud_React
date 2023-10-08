import React from "react";
import { Icon } from "@iconify/react";
import { Switch } from "antd-mobile";
import { nav } from "./nav";
export default function sidebarNav() {
  return (
    <>
      {nav.map((item, index) => (
        <div key={index} className="bg-[#fff] mt-[3vw]  rounded-[2vw]">
          {item.title ? (
            <div className="h-[9vw] leading-[9vw] pl-[5vw] text-[2.9vw] text-[#9B8B86] border-[#ccc]">
              {item.title}
            </div>
          ) : null}
          {item?.data.map((items, index) => (
            <div
              key={index}
              className="flex items-center justify-between h-[12vw]"
            >
              <div className="flex items-center pl-[5vw]">
                <Icon icon={items.icon} />
                <span className="text-[3.3vw] ml-[3vw]">{items.name}</span>
              </div>
              <div className="mr-[3vw] flex items-center">
                <span className="text-[12px] text-[#999] mr-[3vw]">
                  {items?.Leeds}
                </span>
                {items.name === "深色模式" ? (
                  <Switch
                    defaultChecked={false}
                    onChange={() => {
                      console.log("111");
                    }}
                    style={{
                      "--checked-color": "#666",
                      "--height": "6vw",
                      "--width": "10vw",
                    }}
                  />
                ) : (
                  <Icon icon="teenyicons:right-outline" />
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
