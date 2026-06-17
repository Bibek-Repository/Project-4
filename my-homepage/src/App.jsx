import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import GalleryBlog from "./pages/GalleryBlog";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/GalleryBlog" element={<GalleryBlog />} />
        <Route path="/Events" element={<Events />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;