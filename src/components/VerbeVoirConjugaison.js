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
						return <li key={index}>{item.voirConjugaison}</li>;
					})}
				</ul>
				<div>
					<Link to={`/verbesmenu/${id}`} className="button">
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
	}
	.conjugaison_container {
		text-align: center;
		margin: 4rem auto 4rem auto;
	}
	.conjugaison_container li {
		margin-bottom: 0.5rem;
	}
`;
