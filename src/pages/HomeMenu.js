import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeMenu = () => {
	return (
		<Wrapper>
			<nav className="home app_body">
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

export { HomeMenu };

const Wrapper = styled.section`
	.home {
		display: flex;
		justify-content: space-around;
		align-items: center;
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
