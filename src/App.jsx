import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home/Home";
import Tours from "./pages/Tours/Tours";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import FAQs from "./pages/FAQs/FAQs";
import BookTour from "./pages/BookTour/BookTour";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/book-tour" element={<BookTour />} />
      </Routes>
    </Router>
  );
}

export default App;
