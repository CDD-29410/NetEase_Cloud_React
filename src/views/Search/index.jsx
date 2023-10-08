import React from "react";
import SearchTop from "./components/SearchTop";
import SearchInf from "./components/SearchInf";
import Footer from "../FooterRouters";

export default function Search() {
  return (
    <div className="bg-[#F8F9FD]">
      <SearchTop />
      <SearchInf />
      <Footer />
    </div>
  );
}
