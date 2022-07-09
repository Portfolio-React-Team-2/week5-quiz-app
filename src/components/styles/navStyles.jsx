import styled from "styled-components";

const NavBarStyles = styled.nav`
  width: 100%;
  background-color: var(--bg-dark);
  padding: 25px;
  /* padding: 10px; */
  color: #fff;
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  .all-score {
    display: flex;
    align-items: center;
    justify-content: center;

    .hand {
      margin-left: 5px;
    }
  }
`;

export default NavBarStyles;
