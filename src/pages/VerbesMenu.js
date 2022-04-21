import styled from "styled-components";
import { Link } from "react-router-dom";
import { data } from "../data/conjugaison-data";

const VerbesMenu = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <ul>
          {data.map((verbo, index) => {
            return (
              <li key={index}>
                {/* navegacion con id al verbo correspondiente y componente */}
                <Link to={`/verbesmenu/${verbo.nombre}`}>{verbo.nombre}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Wrapper>
  );
};

export { VerbesMenu };

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
