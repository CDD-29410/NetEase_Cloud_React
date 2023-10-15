import React, { useState } from "react";
import { Popup } from "antd-mobile";
import { Icon } from "@iconify/react";

export const Kebabs = () => {
  const [visible, setVisible] = useState(false);
  const ListInf = [
    {
      icon: (
        <Icon className="mr-[5vw]" icon="uiw:like-o" width="7vw" height="7vw" />
      ),
      Text: "优先推荐",
    },
    {
      icon: (
        <Icon
          className="mr-[5vw]"
          icon="ion:heart-dislike-outline"
          width="7vw"
          height="7vw"
        />
      ),
      Text: "减少推荐",
    },
    {
      icon: (
        <Icon
          className="mr-[5vw]"
          icon="icon-park-outline:more-two"
          width="7vw"
          height="7vw"
        />
      ),
      Text: " 更多内容",
    },
  ];
  return (
    <>
      <Icon
        icon="ant-design:more-outlined"
        onClick={() => setVisible(!visible)}
        width="5vw"
        height="5vw"
      />
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        bodyStyle={{
          height: "25vh",
          borderTopLeftRadius: "3vw",
          borderTopRightRadius: "3vw",
        }}
      >
        <div>
          <div className="flex justify-between items-center h-[10vw] border-b px-[5vw]">
            <p className="text-[4vw] text-[#8E9097]">标题</p>
            <Icon
              icon="ph:x"
              width="5vw"
              height="5vw"
              className="bg-[#E5E7EB] rounded-[50%]"
              onClick={() => setVisible(false)}
            />
          </div>
          <div className="p-[5vw] pt-[0vw]">
            {ListInf.map((item, index) => (
              <div key={index} className="flex items-center h-[12vw]">
                {item.icon}
                {item.Text}
              </div>
            ))}
          </div>
        </div>
      </Popup>
    </>
  );
};
