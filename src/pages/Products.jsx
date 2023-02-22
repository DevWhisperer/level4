import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import VersatileButton from "../style/VersatileButton";

const Products = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const commentPost = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BASEURL}/comments`, {
      comment: comment,
    });
  };

  const { isLoading, error, data } = useQuery(["getItem"], () => {
    return axios.get(`${process.env.REACT_APP_BASEURL}/item/${id}`);
  });

  if (isLoading) {
    return <h1>로딩중</h1>;
  }
  if (error) {
    return <h1>에러남</h1>;
  }
  if (data) {
    const item = data.data;
    return (
      <Container style={{ textAlign: "center" }}>
        <img src={item.src} />
        <h1>{item.title}</h1>
        <p>{item.desc}</p>

        <form onSubmit={commentPost}>
          <div>댓글 남기기</div>
          <input
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <VersatileButton type="submit">입력</VersatileButton>
        </form>
      </Container>
    );
  }
};

export default Products;
