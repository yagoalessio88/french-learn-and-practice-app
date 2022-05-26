import styled from "styled-components";
import { Link } from "react-router-dom";
import { data } from "../data/conjugaison-data";

const VerbesMenu = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <ul className="navbar_list">
          {data.map((verbo, index) => {
            return (
              <li className="navbar_list_item" key={index}>
                <Link to={`/verbesmenu/${verbo.nombre}`} className="button">
                  {verbo.nombre}
                </Link>
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
`;
