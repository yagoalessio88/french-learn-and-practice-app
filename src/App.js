import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterNavbar } from "./pages/FooterNavbar.js";
import { NavbarDesktop } from "./pages/NavbarDesktop";
import { MainMenu } from "./pages/MainMenu.js";
import { VerbsMenu } from "./pages/VerbsMenu";
import { Verb } from "./components/Verb.js";
import { VerbsSearch } from "./components/VerbsSearch";
import { VerbConjugation } from "./components/VerbConjugation";
import { ConjugationMenu } from "./pages/ConjugationMenu";





function App() {
	return (
		<BrowserRouter>
			<NavbarDesktop />
			<FooterNavbar />
			<Routes>
				<Route path="/" element={< MainMenu />} />
				<Route path="/tense" element={< ConjugationMenu />} />
				<Route path="/verbs-menu/:tense" element={< VerbsMenu />} />
				<Route path="/verbs-search" element={< VerbsSearch />} />
				<Route path="/verb/:id" element={< Verb />} />
				<Route path="/verb-conjugation/:id" element={<VerbConjugation />} />
				<Route path="*" />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
