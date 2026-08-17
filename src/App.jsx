import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app-root">
      <Navbar />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <CartModal />

      <footer className="site-footer text-center">
        <div className="container">
          <p className="mb-0">
            CinemaDB Application • React 19, Redux Toolkit, Context API, React Router DOM &amp; Bootstrap 5
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
