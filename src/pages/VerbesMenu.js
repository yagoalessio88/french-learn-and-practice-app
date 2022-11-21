import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { data } from "../data/conjugaison-data";

const VerbesMenu = () => {
	const verbs = data.map((item) => {
		return item.nombre;
	});
	verbs.sort();
	let initials = [...new Set(data.map((item) => item.index))];
	initials.sort();


	const [indexKey, setIndexKey] = useState("A");
	const getVerb = (item) => {
		setIndexKey(item)
	};

	return (
		<Wrapper className="app_body">
			<header className="header">
				<ul className="header_links">
					{initials.map((item, index) => (<button key={index} className="header_link" onClick={() => { getVerb(item) }}>{item}</button>))}
				</ul>
			</header>
			<nav className="navbar ">
				<ul className="navbar_list">
					{data.map((item, key) => {
						if (item.index === indexKey) {
							return (
								<li className="navbar_list_item" key={key}>
									<Link to={`/verbesmenu/${item.nombre}`} className="button">
										{item.nombre}
									</Link>
								</li>
							)
						} else {
							return null
						}

					})}
				</ul>
			</nav>
		</Wrapper>
	);
};

export { VerbesMenu };

const Wrapper = styled.section`
	.header{
		position:sticky;
		top:0;
		padding: 1.7rem;
		z-index: 100000;
		width: 100%;
		background-color: rgb(246, 246, 246);
	}
	.header_links{
		display:flex;
		justify-content: space-around;
		flex-direction:row;
		flex-wrap: wrap;
	}
	.header_link{
		margin: 0.3rem;
		border-style:none;
		font-size: 2rem;
		height: 2rem;
		width: 4rem;
		transition: all 0.3s ease;
		background-color: rgb(246, 246, 246);
	}
	.header_link:active{
		text-decoration: none;
		border: none;
	}
	.header_link:visited{
		text-decoration: none;
		border: none;
	}
	.navbar_list {
		padding: 0.5rem;
		height: 90%;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
	  }
	  
	  .navbar_list_item {
		margin: 0.7rem auto;
	  }
	@media screen and (min-width: 700px) {
		.header{
			margin-bottom: 4rem;
		}
		.header_link{
			font-size: 1.2rem;
			height: 2.5rem;
			width: 2.5rem;
		}
		.header_link:hover{
			cursor:pointer;
			color: rgba(51, 131, 228, 0.9);
			transform: scale(1.3);
		}
		.navbar_list {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 1rem;

		}
		.navbar_list_item {
			margin: 0;
		}
	}
`;
