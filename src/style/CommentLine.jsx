import styled from "styled-components";

const CommentLine = styled.div`
  background-color: ${({ i }) => (i % 2 == 0 ? "#f0f0f0" : "#c0c0c0")};
  border-radius: 20px;
  height: 40px;
  width: 180vh;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  &:hover {
    background-color: gray;
  }
  &:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
`;

export default CommentLine;
