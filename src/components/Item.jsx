import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate(`/products/${item.id}`);
  };
  return (
    <div onClick={goToDetailPage}>
      <img src={item.src} width="100%" />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
    </div>
  );
};

export default Item;
