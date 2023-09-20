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