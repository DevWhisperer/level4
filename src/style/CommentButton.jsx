import styled from "styled-components";

const CommentButton = styled.div`
  background-color: #d3d3d3;
  width: ${({ commentMode }) => {
    switch (commentMode) {
      case "FOLD":
        return "80vh";
      case "READ":
        return "80vw";
      default:
        return "80vw";
    }
  }};
  height: ${({ commentMode }) => {
    switch (commentMode) {
      case "FOLD":
        return "50px";
      case "READ":
        return "500px";
      default:
        return "500px";
    }
  }};
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  box-shadow: 0 -5px 5px -5px #333;
  transition: 1s;
`;

export default CommentButton;
