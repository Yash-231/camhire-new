import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Photographers from "./components/Photographers";
import Blogs from "./components/Blogs";
import Blogposts from './components/Blogposts';
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <Navbar />
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
  )
}

export default App