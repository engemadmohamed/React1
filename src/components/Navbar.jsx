import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 sticky-top border-bottom border-warning border-opacity-25"
      style={{ backdropFilter: "blur(16px)", zIndex: 1040 }}
    >
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2 fw-bold text-warning" to="/">
          <span className="fs-3">🎬</span>
          <span style={{ letterSpacing: "-0.5px" }}>Movie Reviewer Pro</span>
        </NavLink>

        <button
          className="navbar-toggler border-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-1 font-monospace">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link px-3 rounded-3 fw-semibold ${
                    isActive ? "active bg-warning text-dark" : "text-light"
                  }`
                }
              >
                🏠 Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link px-3 rounded-3 fw-semibold ${
                    isActive ? "active bg-warning text-dark" : "text-light"
                  }`
                }
              >
                ℹ️ About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link px-3 rounded-3 fw-semibold ${
                    isActive ? "active bg-warning text-dark" : "text-light"
                  }`
                }
              >
                📩 Contact & Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
