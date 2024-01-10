import ShoppingCartProvider from "./context/ShoppingCartContext ";
import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import Store from "./Components/Store";
import About from "./Components/About";
function App() {
  return (
    <ShoppingCartProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
