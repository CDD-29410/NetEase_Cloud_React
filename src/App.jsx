import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeView from "@/views/HomeView/index";
import Search from "@/views/Search/index";
import Podcasts from "@/views/Podcasts/index";
import Mine from "@/views/Mine/index";
import "./index.css";
import Bar from "./components/Bar.jsx";
import Login from "./views/Login";
import PlaylistsInf from "./views/HomeView/components/PlaylistsInf";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 主要界面 */}
        <Route path="/" element={<Navigate to="/HomeView" />}></Route>
        <Route path="/HomeView" element={<HomeView />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/Podcasts" element={<Podcasts />}></Route>
        <Route path="/Mine" element={<Mine />}></Route>
        <Route path="/PlaylistsInf/:id" element={<PlaylistsInf />}></Route>
        {/* 登錄 */}
        <Route path="/Login" element={<Login />} /> {/* 登录 */}
        {/* 測試*/}
        <Route path="/Bar" element={<Bar />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
