import React from "react";
export default function lazyComponent(props) {
  const ComPonent = React.lazy(() => import(""));
  return (
    <React.Suspense fallback={<div>加载中...</div>}>
      <ComPonent />
    </React.Suspense>
  );
}
