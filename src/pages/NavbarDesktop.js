import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavbarDesktop = () => {
	return (
		<Wrapper>
			<nav className="navbar">
				<ul className="navbar_links">
					<li className="navbar__link__home">
						<Link to="/" className="">
							Home
						</Link>
					</li>
					<li className="navbar__link__home">
						<Link to="/verbs-menu" className="">
							Verbes
						</Link>
					</li>
				</ul>
			</nav>
		</Wrapper>
	);
};

export { NavbarDesktop };

const Wrapper = styled.section`
	.navbar {
        display:none;
	}
	@media screen and (min-width: 915px) {
		.navbar {
            display: block;
            position:sticky;
		    top:0;
			height: 4rem;
			width: 100%;
			padding: 1rem;
        	box-shadow: -1px 0px 20px -12px rgba(0, 0, 0, 0.4);
        }
		.navbar_links{
			display: flex;
			justify-content: space-evenly;
		}
	}
`;
