import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
