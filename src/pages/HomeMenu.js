import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeMenu = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/verbesmenu">Verbes Menu</Link>
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
  button {
    border-style: none;
    background-color: white;
  }
  button:hover {
    cursor: pointer;
  }
`;
