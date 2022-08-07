import styled from "styled-components";
import { data } from "../data/conjugaison-data.js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Verbe = () => {
	const { id } = useParams();
	const verbo = data.filter((element) => element.nombre === id)[0];
	const { conjugaison } = verbo;
	const [allRightAnswers, setAllRightAnswers] = useState(false);

	const checkAnswers = () => {
		let ul = document.querySelector(".main-verbe_ul");
		const listElements = [...ul.querySelectorAll(".text-input")];
		const listUserValues = listElements.map((item) => {
			return item.value;
		});
		const answers = conjugaison.map((item) => {
			return item.reponse;
		});

		const results = answers.map((item, index) => {
			if (listUserValues[index] !== "") {
				if (item.toUpperCase() === listUserValues[index].toUpperCase()) {
					const element = document.getElementById(index);
					element.classList.remove("wrong_answer");
					return true;
				} else {
					const element = document.getElementById(index);
					element.classList.add("wrong_answer");
					return false;
				}
			} else {
				const element = document.getElementById(index);
				element.classList.add("wrong_answer");
			}
			return false;
		});
		if ([...new Set(results)][0] === true) {
			setAllRightAnswers(true);
			setTimeout(() => {
				setAllRightAnswers(false);
			}, 3000);
		}
	};

	return (
		<Wrapper>
			<article className="app_body main-verbe">
				<h3 className="main-verbe__title">{id}</h3>
				<div className="main-verbe-ul_parent">
					<ul className="main-verbe_ul">
						{conjugaison.map((item, index) => {
							const { first, last } = item;
							return (
								<li className="main-verbe__li-element" key={index}>
									{first}
									<input className="text-input" id={index} type="text" />
									{last}
								</li>
							);
						})}
					</ul>

					{allRightAnswers && (
						<h2 className="main-verbe_result">Félicitations!!</h2>
					)}
				</div>
				<div className="button_container">
					<button
						type="button"
						className="button main-verbe__button"
						onClick={checkAnswers}
					>
						Vérifier les Réponses
					</button>
					<button type="button" className="button main-verbe__button">
						<Link to={`/verbeconjugaison/${id}`} className="button">
							Voir Conjugaison
						</Link>
					</button>
				</div>
			</article>
		</Wrapper>
	);
};

export { Verbe };

const Wrapper = styled.section`
	.main-verbe {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.main-verbe__title {
		margin-bottom: 2rem;
		text-transform: capitalize;
		font-size: 2rem;
	}
	.main-verbe-ul_parent {
		width: 100%;
		padding: 0.5rem;
	}
	.main-verbe_ul {
		text-align: left;
		margin: 0 auto;
	}
	.main-verbe__li-element {
		margin-bottom: 0.5rem;
	}
	.main-verbe input {
		margin: 0 0.5rem;
		width: 5rem;
	}
	.button_container {
		display: flex;
		justify-content: space-around;
		gap: 1rem;
	}
	.main-verbe__button {
		margin-top: 3rem;
	}
	.wrong_answer {
		border: 1px solid red;
	}
	button_container {
	}
	.main-verbe_result {
		margin: 1rem;
	}
`;
