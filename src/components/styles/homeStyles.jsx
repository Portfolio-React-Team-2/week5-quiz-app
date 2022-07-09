import styled from "styled-components";

const HomeStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10% 0;

  div.content {
    width: 70%;
    background-color: #fff;
    box-shadow: 0 0 2px 3px #00000042;
    padding: 5%;

    h1 {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 700px) {
    /* margin: 15% 0; */

    div.content {
      width: 90%;
    }
  }
`;

export default HomeStyles;
