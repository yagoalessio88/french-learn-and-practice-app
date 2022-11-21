import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainMenu = () => {
	return (
		<Wrapper className="app_body">
			<nav className="home">
				<h1 className="home_title">Bienvenue!</h1>
				<p className="home_text">Profitez-en pour pratiquer la conjugaison de plein de verbes à l'infinitif!</p>
				<ul className="home_list">
					<li className="home_list_item">
						<Link to="/verbesmenu" className="button">
							Verbes
						</Link>
					</li>
					{/* <li className="navbar_list_item">
						<Link to="/rechercherverbes" className="button">
							rechercher verbes
						</Link>
					</li> */}
				</ul>
			</nav>
		</Wrapper>
	);
};

export { MainMenu };

const Wrapper = styled.section`
	.home {
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
	  @media screen and (min-width: 768px) {
		.home{
			
		}
		
	  }

	
`;
