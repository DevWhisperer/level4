import axios from "axios";
import React, { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  modeChange,
  setModeFold,
  setModeRead,
} from "../redux/modules/modeSlice";
import CommentLine from "../style/CommentLine";
import VersatileButton from "../style/VersatileButton";

const CommentInner = () => {
  const dispatch = useDispatch();
  const [selectedId, setSeletedId] = useState(0);
  const currentMode = useSelector((state) => {
    return state.modeSlice.mode;
  });

  const changeMode = (mode) => {
    dispatch(modeChange(mode));
  };

  const onAddButtonHandler = (e) => {
    e.preventDefault();
    if (e.target.comment.value == "") {
      alert("공백을 입력하세요");
      return;
    }
    axios.post(`${process.env.REACT_APP_BASEURL}/comments`, {
      comment: e.target.comment.value,
    });
    refetch();
    e.target.comment.value = "";
  };

  const onEditButtonHandler = (e) => {
    e.preventDefault();
    if (e.target.comment.value == "") {
      alert("공백을 입력하세요");
      return;
    }
    axios.patch(`${process.env.REACT_APP_BASEURL}/comments/${selectedId}`, {
      comment: e.target.comment.value,
    });
    refetch();
    e.target.comment.value = "";
    dispatch(modeChange("READ"));
  };

  const onDeleteButtonHandler = (e, id) => {
    axios.delete(`${process.env.REACT_APP_BASEURL}/comments/${id}`);
    refetch();
    dispatch(modeChange("READ"));
  };

  const { isLoading, error, data, refetch } = useQuery(["getComments"], () => {
    return axios.get(`${process.env.REACT_APP_BASEURL}/comments`);
  });

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }
  if (error) {
    return <div>에러입니다.</div>;
  }

  if (data) {
    switch (currentMode) {
      case "FOLD":
        return <div onClick={() => changeMode("READ")}>댓글창 보기</div>;
      case "READ":
        return (
          <div>
            <form onSubmit={onAddButtonHandler}>
              <input
                type="text"
                placeholder="댓글을 입력하세요"
                name="comment"
                id="comment-input-area"
              />
              <VersatileButton type="submit">추가</VersatileButton>
            </form>
            <div>
              {data.data.map((item, i) => (
                <CommentLine
                  i={i}
                  key={item.id}
                  onClick={() => {
                    const commentInputArea = document.querySelector(
                      "#comment-input-area"
                    );
                    changeMode("EDIT");

                    commentInputArea.value = item.comment;
                  }}
                >
                  {item.comment}
                  <VersatileButton
                    onClick={() => onDeleteButtonHandler(item.id)}
                    style={{
                      borderRadius: "20px",
                    }}
                  >
                    삭제하기
                  </VersatileButton>
                </CommentLine>
              ))}
              <VersatileButton onClick={() => changeMode("FOLD")}>
                닫기
              </VersatileButton>
            </div>
          </div>
        );
      case "EDIT":
        return (
          <div>
            <form onSubmit={onEditButtonHandler}>
              <input
                type="text"
                placeholder="댓글을 입력하세요"
                name="comment"
                id="comment-input-area"
              />
              <VersatileButton type="submit">수정</VersatileButton>
            </form>
            <div>
              {data.data.map((item, i) => (
                <CommentLine
                  i={i}
                  key={item.id}
                  onClick={(e) => {
                    changeMode("EDIT");
                    const commentInputArea = document.querySelector(
                      "#comment-input-area"
                    );
                    setSeletedId(item.id);
                    commentInputArea.value = item.comment;
                  }}
                >
                  {item.comment}
                  <VersatileButton
                    onClick={(e) => onDeleteButtonHandler(e, item.id)}
                    style={{
                      borderRadius: "20px",
                    }}
                  >
                    삭제하기
                  </VersatileButton>
                </CommentLine>
              ))}
              <VersatileButton onClick={() => changeMode("FOLD")}>
                닫기
              </VersatileButton>
            </div>
          </div>
        );
      default:
        return;
    }
  }
};

export default CommentInner;
