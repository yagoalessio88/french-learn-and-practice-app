import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeMenu = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <ul className="navbar_list">
          <li className="navbar_list_item">
            <Link to="/verbesmenu" className="button">
              Verbes Menu
            </Link>
          </li>
          <li className="navbar_list_item">
            <Link to="/rechercherverbes" className="button">
              rechercher verbes
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export { HomeMenu };

const Wrapper = styled.section`
  .navbar {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
