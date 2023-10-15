import { configureStore } from "@reduxjs/toolkit";

import Judgement from "./slices/IsALL";

const store = configureStore({
  reducer: {
    Judgement,
  },
});

export default store;
