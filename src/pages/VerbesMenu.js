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
	const setActiveButton = (e) => {
		const buttons = [...e.target.parentElement.getElementsByClassName("header_link")];
		buttons.map((item) => { return item.classList.remove("link_active") });
		e.target.classList.add("link_active");
	};

	return (
		<Wrapper className="app_body">
			<header className="header">
				<ul className="header_links">
					{initials.map((item, index) => (<button key={index} className={`header_link ${item === indexKey ? "link_active" : ""}`} onClick={(e) => { getVerb(item); setActiveButton(e) }}>{item}</button>))}
				</ul>
			</header>
			<nav className="navbar">
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
		background-color: var(--background-main);
	}
	.header_links{
		display:flex;
		justify-content: space-around;
		flex-direction:row;
		flex-wrap: wrap;
	}
	.header_link{
		margin: 0.2rem;
		padding: 0.4rem;
		min-width: 3rem;
		font-size: 2rem;
		border: 0.5px solid var(--gray);
		border-radius: var(--radious);
		transition: all 0.3s ease;
		background-color: white;
		color: var(--blue);
	}
	.link_active{
		border: 0.5px solid red;
		color: red;
	}
	.navbar_list {
		padding: 0.5rem;
		height: 90%;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
	  }
	  .navbar_list_item {
		width: 90%;
		margin: 0.2rem auto;
	  }
	@media screen and (min-width: 420px) {
		.header{
			margin-bottom: 4rem;
			padding: 2rem 3rem;
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
		.navbar{
			padding: 2rem 5rem 0 5rem;
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
