import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "../context/useTheme";
import { toggleCartModal } from "../redux/slices/cartSlice";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="site-navbar sticky-top">
      <div className="container d-flex align-items-center justify-content-between py-2.5">
        <NavLink to="/" className="brand-link">
          <span>CinemaDB</span>
          <span className="brand-badge">Pro</span>
        </NavLink>

        <div className="d-flex align-items-center gap-2 order-lg-3">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            type="button"
            className="cart-btn"
            onClick={() => dispatch(toggleCartModal())}
          >
            <span>Watchlist</span>
            <span className="cart-badge">{cartItems.length}</span>
          </button>
        </div>

        <div className="d-flex align-items-center gap-1 order-lg-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-custom-link ${isActive ? "active" : ""}`
            }
          >
            Library
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-custom-link ${isActive ? "active" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-custom-link ${isActive ? "active" : ""}`
            }
          >
            Contact & Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
