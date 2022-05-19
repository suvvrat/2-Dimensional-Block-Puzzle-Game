import styled from "styled-components";
import bg from "../../img/bg.jpg";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px aside {
    width: 100%;
    max-width: block;
    padding: 20px;
  }
`;
