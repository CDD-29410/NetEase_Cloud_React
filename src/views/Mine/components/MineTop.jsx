// 头部
import React from "react";
import { Icon } from "@iconify/react";
export default function MineTop() {
  return (
    <div className="px-[3vw] z-50 flex h-[10vw] justify-between items-center fixed top-0 left-0 right-0">
      <Icon icon="ph:arrow-left" className="text-[8vw]" />
      <Icon icon="ri:more-2-fill" className="text-[8vw]" />
    </div>
  );
}
