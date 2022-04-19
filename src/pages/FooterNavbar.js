import styled from "styled-components";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";
const FooterNavbar = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <ul>
          <li className="navbar__link__home">
            <Link to="/">
              <BiHome className="navbar__icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export { FooterNavbar };

const Wrapper = styled.section`
  .navbar {
    height: 4rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
  }
  .navbar__icon {
    height: 2rem;
    width: auto;
    color: black;
  }
`;
