import React from "react";
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
				if (item.toUpperCase() === listUserValues[index].toUpperCase().trim()) {
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
		let resultsSet = [...new Set(results)];
		if (resultsSet.length === 1 && resultsSet[0] === true) {
			setAllRightAnswers(true);
			setTimeout(() => {
				setAllRightAnswers(false);
			}, 3000);
		}
	};

	return (
		<Wrapper className="app_body">
			<article className=" main-verbe ">
				<div className="section-container">
					<h3 className="main-verbe__title">{id}</h3>
					<div className="main-verbe-ul_parent">
						<ul className="main-verbe_ul">
							{conjugaison.map((item, index) => {
								const { first, last } = item;
								return (
									<li className="main-verbe__li-element" key={index}>
										{first}
										<input
											className="text-input"
											id={index}
											type="text"
											autoComplete="off"
										/>
										{last}
									</li>
								);
							})}
						</ul>
					</div>

					{allRightAnswers && (
						<h2 className="main-verbe_result">Félicitations!!</h2>
					)}
				</div>
				<div className="button_container">
					<button type="button" className="button" onClick={checkAnswers}>
						Vérifier
					</button>

					<Link to={`/verbeconjugaison/${id}`} className="button link">
						Conjugaison
					</Link>
					<Link to={`/verbesmenu`} className="button link">
						Verbes
					</Link>
				</div>
			</article>
		</Wrapper>
	);
};

export { Verbe };

const Wrapper = styled.section`
	.main-verbe {
		text-align: center;
		height: 100%;
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
		font-size: 2rem;
	}
	.text-input{
		margin: 0 0.5rem;
		height: 2rem;
		width: 50%;
		font-size: 1.5rem;
		border: none;
		background-color: white;
		border-radius: 7px;
	}
	.text-input:focus{
		outline: none;
	}
	.button_container {
		padding-top: 2rem;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.wrong_answer {
		border: 0.5px solid red;
	}
	.main-verbe_result {
		margin-top: 2rem;
		margin-bottom: 2rem;
		font-size: 2.5rem;
	}
	@media screen and (min-width: 915px) {
		.main-verbe {
			height:100%;
		}
		.main-verbe__title {
			margin-top: 2rem;
		}
		.section-container {
			width: 50%;
			margin: 0 auto;
		}
		.main-verbe-ul_parent{
			padding-top: 2rem;
		}
		.main-verbe__li-element {
			font-size: 1.2rem;
		}
		.text-input{
			height: 1.6rem;
			font-size: 1rem;
		}
		.button_container {
			margin-top: 1.5rem;
		}
		.button_container {
			width: 60%;
			margin: auto;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
		}
	}
`;
