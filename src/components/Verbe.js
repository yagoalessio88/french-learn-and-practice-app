import styled from "styled-components";
import { data } from "../data/conjugaison-data.js";
import { useParams } from "react-router-dom";

const Verbe = () => {
  const { id } = useParams();
  const verbo = data.filter((element) => element.nombre === id)[0];
  const { conjugaison } = verbo;

  return (
    <Wrapper>
      <article className="main-article main-verbe">
        <h3 className="main-verbe__title">{id}</h3>
        <ul>
          {conjugaison.map((e, index) => {
            const { first, last } = e;
            return (
              <li key={index} className="main-verbe__li-element">
                {first}
                <input type="text" />
                {last}
              </li>
            );
          })}
        </ul>

        <button type="button" className="button main-verbe__button">
          voir conjugaison
        </button>
      </article>
    </Wrapper>
  );
};

export { Verbe };

const Wrapper = styled.section``;
