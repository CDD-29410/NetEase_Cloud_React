//所有的请求
import axios from "axios";
import { useEffect } from "react";
// import dayjs from "dayjs";
// const timestamp = dayjs().valueOf()
// console.log(timestamp)
const http = axios.create({
  baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app",
});
// 退出登录
export const Logout = () => http.get("/logout");

//登录状态
export const getLoginStatus = () => http.get("/login/status");

getLoginStatus()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// 轮播
export const homepageBlockPage = () => http.get("/homepage/block/page");

// 菜单
export const homepageDragonBall = () => http.get("/homepage/dragon/ball");

//推荐歌单
export const personalized = () => http.get("/personalized");

//音乐日历
export const startTime = () =>
  http.get(`/calendar?startTime=1677417600000&endTime=1677417600000`);

// 搜索
export async function fetchToplistDetail() {
  const res = await http.get("/toplist/detail");
  const playlist = await Promise.all(
    res.data.list.map(({ id }) =>
      http.get("playlist/detail", { params: { id } })
    )
  );
  return playlist.map((item) => item.data.playlist);
}

//歌单
export const playlistDetail = (id) =>
  http.get("playlist/detail", { params: { id } });

// 歌单音乐数据
export const playlistTrackAll = (id) =>
  http.get("/playlist/track/all", { params: { id } });

export const getMP3 = async (id) => {
  await http.get("/song/url/v1", { params: { id, level: "standard" } });
};

//搜索框
export const SearchBox = (params) => http.get(`cloudsearch?keywords=${params}`);

// 获取二维码
export const getLoginQrCKey = (params) => http.get("/login/qr/key", { params });

// 获取二维码图片
export const getLoginQrCreate = (params) =>
  http.get("/login/qr/create", { params });

// 二维码检测
export const getLoginQrCheck = (params) =>
  http.get("/login/qr/check", { params });

// 退出登录
export const getLogout = () => http.get("/logout");

// 账号信息
export const getUserAccount = () => http.get("/user/account");

// 用户详情
export const getUserDetail = (uid) =>
  http.get("/user/detail", { params: { uid } });

// 获取用户歌单
export const getUserPlaylist = (uid) =>
  http.get("/user/playlist", { params: { uid } });

// MV 排行
export const MVRanking = (area) => http.get("/top/mv", { params: { area } });
// MV视频
export const featMvUrl = (id) => http.get("/mv/url", { params: { id } });
// MV视频信息
export const featMvDetail = (mvid) =>
  http.get("/mv/detail", { params: { mvid } });
// 获取 mv 点赞转发评论数数据
export const featMvDetailInfo = (mvid) =>
  http.get("/mv/detail/info", { params: { mvid } });
