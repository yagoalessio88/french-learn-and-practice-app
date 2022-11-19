import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterNavbar } from "./pages/FooterNavbar.js";
import { MainMenu } from "./pages/MainMenu.js";
import { VerbesMenu } from "./pages/VerbesMenu";
import { Verbe } from "./components/Verbe.js";
import { RechercherVerbes } from "./components/RechercherVerbes";
import { VerbeVoirConjugaison } from "./components/VerbeVoirConjugaison";


function App() {
	return (
		<BrowserRouter>
			<FooterNavbar />
			<Routes>
				<Route path="/" element={<MainMenu />} />
				<Route path="/verbesmenu" element={<VerbesMenu />} />
				<Route path="/rechercherverbes" element={<RechercherVerbes />}></Route>
				<Route path="verbesmenu/:id" element={<Verbe />} />
				<Route path="verbeconjugaison/:id" element={<VerbeVoirConjugaison />} />
				<Route path="*" />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
