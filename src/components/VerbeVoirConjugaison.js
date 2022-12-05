import React from "react";
import styled from "styled-components";
import { data } from "../data/conjugaison-data.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function VerbeVoirConjugaison() {
	const { id } = useParams();
	const verbo = data.filter((element) => element.nombre === id)[0];
	const { conjugaison } = verbo;

	return (
		<Wrapper>
			<section className="app_body">
				<ul className="conjugaison_container">
					{conjugaison.map((item, index) => {
						return <li className="conjugaison__li-element" key={index}>{item.voirConjugaison}</li>;
					})}
				</ul>
				<div className="button_container">
					<Link to={`/verbesmenu/${id}`} className="button link">
						retourner
					</Link>
				</div>
			</section>
		</Wrapper>
	);
}

export { VerbeVoirConjugaison };

const Wrapper = styled.section`
	.app_body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	.conjugaison_container {
		text-align: center;
	}
	.conjugaison__li-element{
		margin-bottom: 0.5rem;
		font-size: 2rem;
	}
	@media screen and (min-width: 915px) {
		.conjugaison__li-element{
			font-size: 1.5rem;
		}
		.conjugaison_container {
			padding-top: 3rem;
		}
	}
`;
