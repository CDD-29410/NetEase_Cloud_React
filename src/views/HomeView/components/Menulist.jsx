// 菜单
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { homepageDragonBall } from "../../../request/index.js";
import dayjs from "dayjs";
const Space = styled.div`
  .red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
  }
  .ClearLine::-webkit-scrollbar {
    height: 0px;
    width: 20px;
  }
`;
const Menulist = () => {
  const [MenulistData, setMenulistData] = useState([]);
  useEffect(() => {
    homepageDragonBall()
      .then((res) => {
        setMenulistData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Space>
      <div className="overflow-hidden mt-[5vw] h-[20vw]">
        <ul className="ClearLine overflow-x-auto flex ">
          {MenulistData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between relative"
            >
              <div className="flex flex-col  items-center w-[20vw] h-[20vw]">
                <div className="w-[20vw] flex justify-center ">
                  <img
                    src={item.iconUrl}
                    alt=""
                    className="red-image w-[11vw] h-[9vw]"
                  />
                </div>
                <span className="text-[#636972] text-[3vw]">{item.name}</span>
              </div>
              {index === 0 ? (
                <p className="absolute text-[3.3vw] text-[#fff] left-[8vw] top-[2vw]">
                  {dayjs(new Date()).format("DD")}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </ul>
      </div>
    </Space>
  );
};
export default Menulist;
