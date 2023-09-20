// 排行榜
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { homepageBlockPage } from "@/request/index";
export default function Detail() {
  const [DetailData, setDetailData] = useState([]);
  useEffect(() => {
    homepageBlockPage()
      .then((res) => {
        console.log(res.data.data.blocks[3].creatives);
        setDetailData(res.data.data.blocks[3].creatives);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className=" overflow-hidden mt-[5vw] border-t border-solid border-[#ccc]">
        <div className="flex justify-between items-center text-[4vw] my-[5vw] font-extrabold">
          <p className="flex justify-between items-center text-[4vw]">
            排行榜
            <Icon icon="icon-park:right" width="5vw" height="5vw" />
          </p>
          <div>
            <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
          </div>
        </div>
        <div className=" ClearLine overflow-x-auto">
          <div className="flex  flex-row">
            {DetailData.map((item, index) => (
              <div
                key={index}
                className="rounded-[5vw] bg-[#fff] mr-[3vw] shadow-md shadow-offset-x-2 shadow-offset-y-2 shadow-blur-4"
              >
                <div className="w-[90vw] px-[3vw] pb-[3vw] ">
                  <div className="flex justify-between items-center h-[10vw]">
                    <p className="text-[4vw] font-extrabold">
                      {item.uiElement.mainTitle.title}
                    </p>
                    <span className="text-[#B1B2BA] text-[2.5vw]">
                      {item.uiElement.mainTitle.titleDesc}
                    </span>
                  </div>
                  <ul>
                    {item.resources.map((items, index) => (
                      <li
                        className="flex justify-between items-center mb-[2vw]"
                        key={index}
                      >
                        <img
                          src={items.uiElement.image.imageUrl}
                          alt=""
                          className="w-[11vw] h-[11vw]"
                        />
                        <span className="w-[4vw] text-center text-[3vw] text-red-400">
                          {index + 1}
                        </span>
                        <div className="flex flex-col justify-center w-[55vw] h-[11vw]">
                          <p className="h-[6vw] overflow-hidden text-[3.6vw] leading-[]">
                            {items.uiElement.mainTitle.title}
                          </p>
                          <p className="flex text-[2.7vw] text-[#7A8086]">
                            {items.resourceExtInfo?.songData.artists.map(
                              (names, index) => (
                                <div key={index}>
                                  {index > 0 ? (
                                    <span>{"/" + names.name}</span>
                                  ) : (
                                    <span>{names.name}</span>
                                  )}
                                </div>
                              )
                            )}
                          </p>
                        </div>
                        {items.uiElement.labelText.text !== "新晋" ? (
                          <div className="text-[red] w-[10vw] text-[2.2vw]">
                            {items.uiElement.labelText.text}{" "}
                          </div>
                        ) : (
                          <div className="text-[green] w-[10vw] text-[2.2vw]">
                            {items.uiElement.labelText.text}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
