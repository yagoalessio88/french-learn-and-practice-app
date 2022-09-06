import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeMenu = () => {
	return (
		<Wrapper>
			<nav className="navbar app_body">
				<ul className="navbar_list">
					<li className="navbar_list_item">
						<Link to="/verbesmenu" className="button">
							Verbes Menu
						</Link>
					</li>
					<li className="navbar_list_item">
						<Link to="/rechercherverbes" className="button">
							rechercher verbes
						</Link>
					</li>
				</ul>
			</nav>
		</Wrapper>
	);
};

export { HomeMenu };

const Wrapper = styled.section`
	.navbar {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;
