import "./App.css";
import About from './components/About';
import Photographers from "./components/Photographers";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Footer from "./components/footer"
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Blogposts from './components/Blogposts';
import { Nav, Container, Navbar } from "react-bootstrap";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <>
        <Navbar expand="lg" sticky="top" bg="dark" variant="dark" className="Navbar">
          <Container >
          {/* <img src={camHireImage} style={{ width: "60%", height: "80%" }} alt="Camhire"/> */}
          <Navbar.Brand href="/" style={{fontSize: "2.5rem", fontWeight: 300}}><b style={{fontWeight: 700}}>CAM</b>HIRE</Navbar.Brand>
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
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/photographers" element={<Photographers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<Blogposts />} />
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
