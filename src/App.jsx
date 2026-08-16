import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app-root min-vh-100 d-flex flex-column">
      <Navbar />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <footer
        className="mt-auto text-center text-secondary small py-4"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          background: "rgba(15, 23, 42, 0.8)",
        }}
      >
        <div className="container">
          <p className="mb-0">
            © 2026 Movie Reviewer Pro | Built with React 19, React Router DOM & Bootstrap 5
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
