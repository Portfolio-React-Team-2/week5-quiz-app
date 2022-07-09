import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --bg-white:	 #fff;
  --bg-dark: #218380;

  --cl-light:  #072524;

  }

  * {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    
    
    
    h1 {
      font-size: 2rem;
      color: var(--cl-light);
    }


    p {
      font-size: 1rem;
    }

    button {
      background-color: var(--bg-dark);
      font-weight: 800;
      color: #fff;
      padding: 15px 20px;
      border-radius: 10px;
      cursor: pointer;
      
      @media screen and (max-width: 600px) {
        padding: 10px 15px;
        
      }
    }

    .scores{

      div{
        display: flex;
        gap: 20px
      }

    }

    .end{
      display: flex;
      flex-direction: column;
      gap: 10px;

      div{
      display: flex;
      gap: 15px;
      }
    }
  }
`;

export default GlobalStyle;
