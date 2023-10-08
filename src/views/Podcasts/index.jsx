import React from "react";
import PodcastsTop from "./components/PodcastsTop";
import PodcastsNav from "./components/PodcastsNav";
import Footer from "../FooterRouters";
export default function Podcasts() {
  return (
    <>
      <PodcastsTop />
      <PodcastsNav />
      <Footer />
    </>
  );
}
