import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeView from "@/views/HomeView/index";
import Search from "@/views/Search/index";
import "./index.css";
import Bar from "./components/Bar.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/HomeView" />}></Route>
        <Route path="/HomeView" element={<HomeView />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        {/* <Route path="/HomeView" element={<HomeView />}></Route> */}
        <Route path="/Bar" element={<Bar />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
