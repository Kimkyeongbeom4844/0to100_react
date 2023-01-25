import React, { Suspense, lazy } from "react";

function App() {
  const Word = lazy(() => import("./utils/splitMe"));
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Word />
      </Suspense>
    </>
  );
}

export default App;
