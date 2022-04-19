import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FooterNavbar } from "./pages/FooterNavbar";

import { HomeMenu } from "./pages/HomeMenu.js";
import { VerbesMenu } from "./pages/VerbesMenu";

function App() {
  return (
    <Router>
      <FooterNavbar />
      <Routes>
        <Route exact path="/" element={<HomeMenu />} />
        <Route path="/verbesmenu" element={<VerbesMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
