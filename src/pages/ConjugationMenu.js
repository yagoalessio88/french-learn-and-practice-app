import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { data as simplePresent } from "../data/verbsConjugationSimplePresent-data.js";
import { data as simpleFuture } from "../data/verbsConjugationSimpleFuture-data.js";
import { useDataContext } from "../context/DataContext.js";


const ConjugationMenu = () => {
	// context hook
	const { setVerbsData, setVerbsDataId } = useDataContext();
	return (
		<Wrapper className="app_body">
			<nav className="home">
				<ul className="home_list">
					<li className="home_list_item">
						<Link to="/verbs-menu/simplePresent" className="button" onClick={() => { setVerbsData(simplePresent); setVerbsDataId("simplePresent") }}>
							Présent de l'indicatif
						</Link>
					</li>
					<li className="home_list_item">
						<Link to="/verbs-menu/simpleFuture" className="button" onClick={() => { setVerbsData(simpleFuture); setVerbsDataId("simpleFuture") }}>
							Futur Simple
						</Link>
					</li>
				</ul>
			</nav>
		</Wrapper>
	);
};

export { ConjugationMenu };

const Wrapper = styled.section`
	.home {
		padding: 2rem 1rem 0 1rem;
		display: flex;
        flex-direction: column;
        align_items: center;
        text-align: center;
	}
	.home_title{
		font-size: 3rem;
		margin-top: 4rem;
        margin-bottom: 3rem;
	}
	.home_text{
		font-size: 1.3rem;
		margin-top: 2rem;
        margin-bottom: 3rem;
	}
	.home_list {
		padding: 0.5rem;
		height: 90%;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
	  }
	  .home_list_item {
		margin: 0.7rem auto;
	  }
	  @media screen and (min-width: 395px) {
		.home{
			
		}
		
	  }

	
`;
