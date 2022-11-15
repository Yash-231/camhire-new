
import "./App.css";
import React from "react";
import About from './components/About';
import Photographers from "./components/Photographers";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Footer from "./components/footer"
import Contact from "./components/Contact";
import camHireImage from './components/img/CAMHIRE.png';
import { Nav, Container, Navbar } from "react-bootstrap";
import { render } from "react-dom";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import { Slider } from "antd";

function App() {
  return (
    <div className="App">
      <>
        <Navbar expand="lg" sticky="top" bg="dark" variant="dark" className="Navbar">
          <Container >
            {/* <img src={camHireImage} style={{ width: "60%", height: "80%" }} alt="Camhire"/> */}
            <Navbar.Brand href="/Home" style={{ fontSize: "2.5rem", fontWeight: 5 }}><b style={{ fontWeight: 700 }}>CAM</b>HIRE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/features">Features</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/photographers">Photographers</Nav.Link>
                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
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
        <Footer />
      </>
    </div>
  );
}

export default App;