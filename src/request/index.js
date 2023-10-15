//所有的请求
import axios from "axios";
import store from "storejs";

const http = axios.create({
  baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app",
});
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  const cookie = store.get("__m__cookie") ?? "";
  config.params = config.params || {};
  config.params.cookie = cookie;
  return config;
});
// 退出登录
export const Logout = () => http.get("/logout");

//登录状态
export const getLoginStatus = () => http.get("/login/status");

// getLoginStatus()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

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

/*----------歌单----------*/
//歌单
export const playlistDetail = (id) =>
  http.get("playlist/detail", { params: { id } });

// 更多收听
export const musicSlider = (id) =>
  http.get("related/playlist", { params: { id } });

// 歌单音乐数据
export const playlistTrackAll = (id) =>
  http.get("/playlist/track/all", { params: { id } });

// 歌曲路径
export const getMP3 = (id) =>
  http.get("/song/url/v1", { params: { id, level: "standard" } });

// 歌单评论/comment/playlist
export const getCommentPlaylist = (id) =>
  http.get("/comment/playlist", { params: { id } });

/*----------歌单处理----------*/
//搜索框
export const SearchBox = (params) =>
  http.get(`/cloudsearch?keywords=${params}`);

// 收藏/取消收藏歌单
// t : 类型,1:收藏,2:取消收藏 id : 歌单 id
export const playlistSubscribe = (params) =>
  http.get(`/playlist/subscribe`, { params });

// /playlist/subscribe?t=1&id=106697785 /playlist/subscribe?t=2&id=106697785

/*----------二维码----------*/
// 获取二维码
export const getLoginQrCKey = (params) => http.get("/login/qr/key", { params });

// 获取二维码图片
export const getLoginQrCreate = (params) =>
  http.get("/login/qr/create", { params });

// 二维码检测
export const getLoginQrCheck = (params) =>
  http.get("/login/qr/check", { params });

/*----------用户----------*/
// 用户详情
export const getUserDetail = (uid) =>
  http.get("/user/detail", { params: { uid } });

// 账号信息
export const getUserAccount = () => http.get("/user/account");

// 获取用户歌单
export const getUserPlaylist = (uid) =>
  http.get("/user/playlist", { params: { uid } });

//用户绑定信息
export const getUserBinding = (uid) =>
  http.get("/user/binding", { params: { uid } });

// 退出登录
export const getLogout = () => http.get("/logout");

/*----------MV----------*/
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

/*----------歌单广场----------*/

// 歌单标签
export const getPlaylistTagsUpdate = () => http.get("/playlist/tags/update");

// 歌单分类 /playlist/catlist
export const getPlaylistCatList = () => http.get("/playlist/catlist");

// 获取精品歌单/top/playlist/highquality 可选参数 : cat: 华语 ,
export const getPlaylistHighQuality = (cat) =>
  http.get("/top/playlist/highquality", { params: { cat } });
