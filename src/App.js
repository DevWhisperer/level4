import React, { useState } from "react";
import Router from "./shared/Router";
import { QueryClientProvider, QueryClient } from "react-query";
import CommentButton from "./style/CommentButton";
import { useDispatch, useSelector } from "react-redux";
import { setModeRead } from "./redux/modules/modeSlice";
import CommentInner from "./components/CommentInner";

function App() {
  const dispatch = useDispatch();
  const currentMode = useSelector((state) => state.modeSlice.mode);
  const queryClient = new QueryClient();
  const commentMode = useSelector((state) => {
    return state.modeSlice.mode;
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <CommentButton commentMode={commentMode}>
        <CommentInner></CommentInner>
      </CommentButton>
    </QueryClientProvider>
  );
}

export default App;
