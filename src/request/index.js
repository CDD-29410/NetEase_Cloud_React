//所有的请求
import axios from "axios";
import dayjs from "dayjs";
const timestamp = dayjs().valueOf()
console.log(timestamp)
const http = axios.create({
  baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app"
})

// 轮播
export const homepageBlockPage = () => http.get('/homepage/block/page')

// 菜单
export const homepageDragonBall = () => http.get('/homepage/dragon/ball')

//推荐歌单
export const personalized = () => http.get('/personalized')

//音乐日历
export const startTime = () => http.get(`/calendar?startTime=1677417600000&endTime=1677417600000`)

// 搜索
// export const HotSearch = () => http.get('/toplist/detail')

export async function fetchToplistDetail() {
  const res = await http.get('/toplist/detail');
  const playlist = await Promise.all(res.data.list.map(({ id }) => http.get('playlist/detail', { params: { id } })));
  return playlist.map(item => item.data.playlist)
}

//搜索框
export const SearchBox = (params) => http.get(`cloudsearch?keywords=${params}`)

// MV 排行

export const MVRanking = (area) => http.get("/top/mv", { params: { area } })