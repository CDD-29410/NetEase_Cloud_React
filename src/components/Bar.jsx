import React, { useEffect, useState } from "react";

const Bar = () => {
  let [Count, setCount] = useState(1);
  //如何让Bar组件重新渲染? (想办法让组件重新执行)
  //调用useState返回的更改状态的函数，触发当前Bar函数重新执行 得到新的返回值
  // (React Element) => UI更新
  useEffect(() => {
    console.log(Count);
  });
  // useEffect(fn) => 第一次执行 只要重新渲染也会执行
  // useEffect(fn,[]) => 只执行一次
  // useEffect(fn,[dep]) => 第一次执行 + deps中只要某一个数据发生变化导致重新渲染
  // useEffect(fn,[...deps]) => fn函数的返回值为函数ff会在该组件销毁的时候执行
  return <div onClick={() => setCount(++Count)}>bar{Count}</div>;
};
export default Bar;
