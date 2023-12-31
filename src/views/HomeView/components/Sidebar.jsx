import React from "react";
import { Icon } from "@iconify/react";
import { Button, Modal } from "antd-mobile";
import SidebarNav from "./SidebarNav";
import { Logout } from "@/request";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="h-screen overflow-y-auto bg-[#F5F5F5]">
      <div className="p-[3vw]">
        <div className="flex items-center justify-between w-[80vw] h-[10vw]">
          <div className="flex items-center">
            <img
              className="w-[6vw] h-[6vw] rounded-[50%]"
              src="https://th.bing.com/th?id=OIP.6c-mOyg4bbaIv8E-sO-upgHaHm&w=246&h=253&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt=""
              onClick={() => {
                navigate("/Mine");
              }}
            />
            <span
              className="ml-[2vw] text-[4vw]"
              onClick={() => {
                navigate("/Login");
              }}
            >
              立即登录
            </span>
            <Icon
              className="text-[5vw]"
              icon="icon-park:right"
              width="5vw"
              height="5vw"
            />
          </div>
          <Icon icon="tabler:scan" width="5vw" height="5vw" />
        </div>
        <div className="w-[77vw] h-[28vw] px-[4vw] pt-[4vw] bg-[#3C3A38] rounded-[3vw] mt-[4vw] flex flex-col justify-between">
          <div className=" relative">
            <h2 className="text-[#fff] text-[4vw]">续费黑椒VIP</h2>
            <p className="flex items-center mt-[2vw]">
              <span className="text-[#9B8B86] text-[2vw]">
                点击恢复超21项专属特权
              </span>
              <Icon
                icon="teenyicons:right-outline"
                width="2vw"
                height="2vw"
                color="#9B8B86"
              />
            </p>
            <div className="w-[16vw] h-[6vw] rounded-[3vw] border-[.1vw] absolute right-0 top-0 text-[2.2vw] text-[#fff] leading-[6vw] text-center">
              会员中心
            </div>
          </div>
          <div className="h-[10vw] text-[#9B8B86] border-t border-[#5B4F4E] flex justify-between items-center">
            <span className="text-[2vw]">受邀专享,黑胶VIP低至0.27元/天!</span>
            <div className=" text-center leading-[2.5vw]">
              <img src="Exclusive.png" alt="" className="w-[5vw] h-[5vw]" />
            </div>
          </div>
        </div>
        <SidebarNav />
        {/* h-[12.5vw] */}
        <div className="mt-[3vw] w-[100%] bg-[#fff] text-[5vw] rounded-[2vw] text-[red] ">
          <Button
            block
            onClick={() => {
              Modal.show({
                content: "确认退出吗",
                closeOnAction: true,
                actions: [
                  {
                    key: "online",
                    text: "确定",
                    primary: true,
                    style: { backgroundColor: "#1677ff" },
                    onClick: () => {
                      Logout();
                      navigate("/Login");
                    },
                  },
                  {
                    key: "download",
                    None: true,
                    text: "取消",
                  },
                ],
              });
            }}
          >
            退出登录
          </Button>
        </div>
      </div>
    </div>
  );
}
