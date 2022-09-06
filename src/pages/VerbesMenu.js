import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { data } from "../data/conjugaison-data";

const VerbesMenu = () => {
	const verbs = data.map((item) => {
		return item.nombre;
	});
	verbs.sort();

	return (
		<Wrapper>
			<nav className="navbar app_body">
				<ul className="navbar_list">
					{verbs.map((item, index) => {
						return (
							<li className="navbar_list_item" key={index}>
								<Link to={`/verbesmenu/${item}`} className="button">
									{item}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</Wrapper>
	);
};

export { VerbesMenu };

const Wrapper = styled.section`
	.navbar {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;
