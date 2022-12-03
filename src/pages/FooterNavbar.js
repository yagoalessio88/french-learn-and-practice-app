import React from "react";
import styled from "styled-components";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";
const FooterNavbar = () => {
	return (
		<Wrapper>
			<nav className="navbar">
				<ul>
					<li className="navbar__link__home">
						<Link to="/">
							<BiHome className="navbar__icon" />
							<p className="homelink_desktop">Home</p>
						</Link>
					</li>
				</ul>
			</nav>
		</Wrapper>
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
		display: flex;
		justify-content: space-around;
		background-color: rgb(238, 238, 238);
	}
	.navbar__icon {
		height: 2rem;
		width: auto;
		color: black;
	}
	.homelink_desktop{
		display:none;	
	}
	@media screen and (min-width: 420px) {
		.navbar__icon {
			display:none;	
		}
		.homelink_desktop{
			display:inline;
		}
	}

`;
