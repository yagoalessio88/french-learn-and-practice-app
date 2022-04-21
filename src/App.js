import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterNavbar } from "./pages/FooterNavbar.js";
import { HomeMenu } from "./pages/HomeMenu.js";
import { VerbesMenu } from "./pages/VerbesMenu";
import { Verbe } from "./components/Verbe.js";

function App() {
  return (
    <BrowserRouter>
      <FooterNavbar />
      <Routes>
        <Route path="/" element={<HomeMenu />} />
        <Route path="/verbesmenu" element={<VerbesMenu />} />
        <Route path="verbesmenu/:id" element={<Verbe />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
