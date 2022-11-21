import "./App.css"
// import { useLocation } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Photographers from "./components/Photographers";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import Blogposts from './components/Blogposts';
import { Nav, Container, Navbar } from "react-bootstrap";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import Features from "./components/Features";


function App() {

  // let location = useLocation();

  return (
      <>
        <Navbar expand="lg" sticky="top" bg="dark" variant="dark" className="Navbar">
          <Container >
            {/* <img src={camHireImage} style={{ width: "60%", height: "80%" }} alt="Camhire"/> */}
            <Navbar.Brand href="/" style={{ fontSize: "3.5vw", fontWeight: 300 }}><b style={{ fontWeight: 700 }}>CAM</b>HIRE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/features">Features</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/photographers">Photographers</Nav.Link>
                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id='main-content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/photographers" element={<Photographers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<Blogposts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </>
  );
}

export default App;