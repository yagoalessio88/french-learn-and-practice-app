import React from "react";
import styled from "styled-components";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";
const FooterNavbar = () => {
	return (
		<Wrapper>
			<nav className="navbar">
				<ul className="navbar_links">
					<li className="navbar__link__home navbar__icon">
						<Link to="/">
							<BiHome />
						</Link>
					</li>
					<li className="homelink_desktop">
						<p >Developped by Yago Aguero <a href="https://www.linkedin.com/in/yagoaguero-88/" target="_blank" rel="noopener noreferrer">Linkedin</a>
						</p>
					</li>
				</ul>
			</nav>
		</Wrapper >
	);
};

export { FooterNavbar };

const Wrapper = styled.section`
	.navbar {
		height: 4rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		padding: 1rem;
		background-color: rgb(238, 238, 238);
	}
	.navbar_links{
		display: flex;
		justify-content: space-around;
	}
	.navbar__icon {
		height: 2rem;
		width: auto;
		color: black;
	}
	.homelink_desktop{
		display:none;	
	}
	@media screen and (min-width: 915px) {
		.navbar__icon {
			display:none;	
		}
		.homelink_desktop{
			display:inline;
			font-size: 0.8rem;
		}
	}
	

`;
