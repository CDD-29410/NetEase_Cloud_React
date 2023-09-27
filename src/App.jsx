import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeView from "@/views/HomeView/index";
import Search from "@/views/Search/index";
import Podcasts from "@/views/Podcasts/index";
import Mine from "@/views/Mine/index";
import "./index.css";
import Bar from "./components/Bar.jsx";
import Footer from "./views/FooterRouters";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/HomeView" />}></Route>
        <Route path="/HomeView" element={<HomeView />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        {/* <Route path="/HomeView" element={<HomeView />}></Route> */}
        <Route path="/Bar" element={<Bar />}></Route>

        <Route path="/Podcasts" element={<Podcasts />}></Route>
        <Route path="/Mine" element={<Mine />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
