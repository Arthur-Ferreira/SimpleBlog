import styled from "styled-components";

const Header = styled.header`
  padding: 2rem 10%;
  background-color: var(--brown);
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav a {
    color: white;
    font-size: 1.25rem;
  
    &:hover, &:active {
      color: var(--yellow-dark);
    }
  }
`
export default Header;