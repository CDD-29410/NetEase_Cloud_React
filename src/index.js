import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const [value,dispatchAction] = useState(initalvalue)
// 什么方法可以导致1组件重新渲染
// 1.手动调用入口render方法
// 2.调用dispatchAction
// 3.其父组件重新渲染
// 4.props参数发生变化的时候
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
