import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/DataContext.js";


const VerbsMenu = () => {
	// context hook
	const { verbsData } = useDataContext();
	console.log(verbsData);

	// verbs functionality
	const verbNames = verbsData.map((item) => {
		return item.name;
	});
	verbNames.sort();
	let initials = [...new Set(verbsData.map((item) => item.index))];
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
					{verbsData.map((item, key) => {
						if (item.index === indexKey) {
							return (
								<li className="navbar_list_item" key={key}>
									<Link to={`/verb/${item.name}/`} className="button">
										{item.name}
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

export { VerbsMenu };

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
		.navbar{
			padding-top: 3rem;
		}
		.navbar_list {
			margin: auto;
			width: 80%;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 0.5rem;
		}
	}
	@media screen and (min-width: 915px) {	
		.header{
			position:static;
			width: 100%;
			background-color: var(--background-main);
			padding: 1rem;
		}
		.header_links{
			display:flex;
			justify-content: space-around;
			flex-direction:row;
			flex-wrap: nowrap;
		}
		.header_link{
			margin: 0.2rem;
			padding: 0.4rem;
			min-width: 3rem;
			font-size: 1rem;
			border: none;
			//border-bottom: 0.5px solid var(--blue);
			border-radius: 0;
			transition: all 0.3s ease;
			background-color: inherit;
			color: var(--blue);
		}
		.header_link:hover{
			cursor:pointer;
			transform: scale(1.3);
			border-bottom: 0.5px solid var(--blue);
		}
		.link_active{
			border: none;
			color: red;
			border-bottom: 0.5px solid red;
			border-radius: 0;
			transform: scale(1.3);
		}
		.navbar{
			padding-top: 3rem;
		}
		.navbar_list {
			margin: auto;
			width: 80%;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 0.5rem;
		}
		.navbar_list_item {
			margin: 0;
		}
		.button{
			width: 100%;
		}

	}
	
`;
