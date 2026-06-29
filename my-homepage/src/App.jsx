import { Routes, Route, useLocation } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import GalleryBlog from "./pages/GalleryBlog";
import Events from "./pages/Events";
import FinalServices from "./pages/FinalServices";
import ProtectedRoute from "./components/ProtectedRoute";
import GalleryManagement from "./admin/GalleryManagement";
import ScrollToTop from "./components/ScrollToTop";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

import EventsManagement from "./admin/EventsManagement";
import BlogsManagement from "./admin/BlogsManagement";
import ServicesManagement from "./admin/ServicesManagement";
import ContactManagement from "./admin/ContactManagement";
import SiteSettings from "./admin/SiteSettings";
import ChangePassword from "./admin/ChangePassword";

import BlogDetails from "./pages/BlogDetails";

function App() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/GalleryBlog" element={<GalleryBlog />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/FinalServices" element={<FinalServices />} />

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={
                                                <ProtectedRoute>
                                                <Dashboard />
                                                </ProtectedRoute>
                                               } 
                                              />
        <Route path="/admin/events" element={<EventsManagement />} />
        <Route path="/admin/blogs" element={<BlogsManagement />} />
        <Route path="/admin/services" element={<ServicesManagement />} />
        <Route path="/admin/contacts" element={<ContactManagement />} />
        <Route path="/admin/settings" element={<SiteSettings />} />
        <Route path="/admin/password" element={<ChangePassword />} />
        <Route path="/admin/gallery" element={
                                                <ProtectedRoute>
                                                  <GalleryManagement />
                                                </ProtectedRoute>
                                              }
                                              />
        <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;



