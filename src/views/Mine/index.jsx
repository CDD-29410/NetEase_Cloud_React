import React from "react";
import MineHeader from "./components/MineHeader";
import MineTop from "./components/MineTop";
import MineInf from "./components/MineInf";
import MineNav from "./components/MineNav";
import Footer from "../FooterRouters";
export default function Mine() {
  return (
    <div className=" w-screen h-screen bg-[#F5F5F5]">
      <MineTop />
      <MineHeader />
      <MineInf />
      <MineNav />
      <Footer />
    </div>
  );
}
