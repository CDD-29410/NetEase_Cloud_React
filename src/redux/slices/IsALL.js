import { createSlice } from "@reduxjs/toolkit";

const Judgement = createSlice({
  name: "判断",
  initialState: {
    Rotate: 0, //旋转度数
    SongVisible: false, //是否展示隐藏栏
    Play: false, //是否播放
  },
  reducers: {
    // 旋转度数
    isRotate(state) {
      state.Rotate += 1;
    },
    //是否展示隐藏栏
    isSongVisible(state) {
      state.SongVisible = !state.SongVisible;
    },
    //是否播放
    isPlay(state) {
      state.Play = !state.Play;
    },
  },
});

export const { isRotate, isSongVisible, isPlay } = Judgement.actions;
export default Judgement.reducer;
