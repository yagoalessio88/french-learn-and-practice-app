import styled from "styled-components";
import { data } from "../data/conjugaison-data.js";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Verbe = () => {
  const { id } = useParams();
  const verbo = data.filter((element) => element.nombre === id)[0];
  const { conjugaison } = verbo;

  const checkAnswers = () => {
    let ul = document.querySelector(".list-conjugaison");
    const listElements = [...ul.querySelectorAll(".text-input")];
    const listUserValues = listElements.map((item) => {
      return item.value;
    });
    const answers = conjugaison.map((item) => {
      return item.reponse;
    });

    answers.forEach((item, index) => {
      if (listUserValues[index] !== "") {
        if (item.toUpperCase() === listUserValues[index].toUpperCase()) {
          const element = document.getElementById(index);
          element.classList.remove("wrong_answer");
        } else {
          const element = document.getElementById(index);
          console.log(element);
          element.classList.add("wrong_answer");
        }
      } else {
        const element = document.getElementById(index);
        console.log(element);
        element.classList.add("wrong_answer");
      }
    });
  };

  return (
    <Wrapper>
      <article className="main-article main-verbe">
        <h3 className="main-verbe__title">{id}</h3>

        <ul className="list-conjugaison">
          {conjugaison.map((item, index) => {
            const { first, last } = item;
            return (
              <li key={index}>
                {first}
                <input className="text-input" id={index} type="text" />
                {last}
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="button main-verbe__button"
          onClick={checkAnswers}
        >
          Vérifier les Réponses
        </button>
      </article>
    </Wrapper>
  );
};

export { Verbe };

const Wrapper = styled.section`
  .wrong_answer {
    border: 1px solid red;
  }
`;
