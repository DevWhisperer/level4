import React from "react";
import { Container } from "react-bootstrap";

const Login = () => {
  const onLoginHandler = (e) => {
    e.preventDefault();
    const { userId, userPassword } = e.target;
    console.log(e.target);
  };
  return (
    <Container>
      <form onSubmit={onLoginHandler}>
        <input type="text" name="userId" />
        <div>
          <div>fdafs</div>
        </div>
        <input type="password" name="userPassword" />
        <input type="submit" />
      </form>
    </Container>
  );
};

export default Login;
