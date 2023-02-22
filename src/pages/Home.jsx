import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import Item from "../components/Item";

const Home = () => {
  const { isLoading, error, data } = useQuery(["getItem"], () => {
    return axios.get(`${process.env.REACT_APP_BASEURL}/item`);
  });
  if (isLoading) {
    return <h1>로딩중...</h1>;
  }
  if (error) {
    return <h1>에러 났음</h1>;
  }

  if (data) {
    return (
      <Container style={{ marginTop: "30px" }}>
        <Row>
          {data.data.map((item) => {
            return (
              <Col key={item.id} lg={6}>
                <Item item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
  return <div></div>;
};

export default Home;
