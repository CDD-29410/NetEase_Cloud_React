import React from "react";
import { Icon } from "@iconify/react";
export default function PodcastsTop() {
  return (
    <div className=" p-[3vw] font-semibold flex items-center  text-[4.5vw] ">
      <Icon icon="ph:arrow-left-bold" className="mr-[4vw]" />
      <span> MV排行榜 </span>
    </div>
  );
}
