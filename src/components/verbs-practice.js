import styled from "styled-components";
import { data } from "../data/conjugaison-data.js";

const VerbsPractice = () => {
  const { aller } = data;

  return (
    <Wrapper>
      <article className="main-article">
        <h3>Verbe Aller</h3>

        <ul>
          {aller.map((e) => {
            const { first, last } = e;
            return (
              <li>
                {first}
                <input type="text" />
                {last}
              </li>
            );
          })}
        </ul>

        <button type="button" className="button">
          voir conjugaison
        </button>
      </article>
    </Wrapper>
  );
};

export { VerbsPractice };

const Wrapper = styled.section`
  .main-article {
    text-align: center;
  }
  h3 {
    margin-bottom: 1.5rem;
  }
  ul {
    text-align: left;
  }
  li {
    margin-bottom: 1rem;
  }
  input {
    margin: 0 0.5rem;
  }
  .solution {
    display: flex;
    gap: 1rem;
  }
`;
