import React from "react";
import { Toast } from "antd-mobile";

export const PopupFn = (props) => {
  return (
    <>
      <div className="p-[4vw] h-[100%] flex flex-col justify-between">
        <div className=" text-[5vw] font-bold">选择举报类型</div>
        {props?.data.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-[4vw] py-[4vw]"
            onClick={() =>
              props?.data.length === 8
                ? (Toast.show({
                    content: "举报成功",
                  }),
                  props?.func(false))
                : props?.func(false)
            }
          >
            {item?.icon ? item?.icon : null}
            <span className="pl-[2vw]">{item?.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};
