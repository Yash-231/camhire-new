
import "./App.css";
import React from "react";
import About from './components/About';
import Photographers from "./components/Photographers";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { Nav, Container, Navbar } from "react-bootstrap";

import { render } from "react-dom";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <>
        <Navbar bg="black" variant="dark">
          <Container >


            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/photographers">Photographers</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/photographers" element={<Photographers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
