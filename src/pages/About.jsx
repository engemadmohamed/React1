import { StyledGenreChip } from "../components/StyledComponents";

function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div
            className="p-4 p-md-5 rounded-3 mb-4"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div className="mb-4">
              <h1 className="h3 fw-bold mb-1" style={{ color: "var(--text-primary)" }}>
                About CinemaDB
              </h1>
              <p className="text-secondary small mb-0">
                A multi-page React application built to showcase modern state management, component architecture, and styling techniques.
              </p>
            </div>

            <hr className="my-4" style={{ borderColor: "var(--border-color)" }} />

            <h2 className="h6 fw-bold text-uppercase mb-3" style={{ color: "var(--text-muted)", letterSpacing: "0.05em" }}>
              Core Capabilities
            </h2>
            <div className="row g-3 mb-4">
              <div className="col-12 col-md-6">
                <div
                  className="p-3 rounded-2 h-100"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <h3 className="h6 fw-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    State Management (Redux & Context)
                  </h3>
                  <p className="small text-secondary mb-0">
                    Context API for global theme control and Redux Toolkit for managing the movie watchlist queue across components.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div
                  className="p-3 rounded-2 h-100"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <h3 className="h6 fw-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    Client-Side Routing
                  </h3>
                  <p className="small text-secondary mb-0">
                    Multi-page navigation powered by React Router DOM with active link highlighting and 404 error handling.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div
                  className="p-3 rounded-2 h-100"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <h3 className="h6 fw-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    Controlled Forms & Validation
                  </h3>
                  <p className="small text-secondary mb-0">
                    Comprehensive form validation with inline feedback, error handling, and state synchronization.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div
                  className="p-3 rounded-2 h-100"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <h3 className="h6 fw-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    4 React Styling Approaches
                  </h3>
                  <p className="small text-secondary mb-0">
                    Demonstrates Inline Styles, CSS Stylesheets, CSS Modules, and Styled Components in production code.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="h6 fw-bold text-uppercase mb-3" style={{ color: "var(--text-muted)", letterSpacing: "0.05em" }}>
              Technical Stack
            </h2>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <StyledGenreChip>React 19</StyledGenreChip>
              <StyledGenreChip>Redux Toolkit</StyledGenreChip>
              <StyledGenreChip>React-Redux</StyledGenreChip>
              <StyledGenreChip>Context API</StyledGenreChip>
              <StyledGenreChip>React Router DOM 7</StyledGenreChip>
              <StyledGenreChip>Bootstrap 5</StyledGenreChip>
              <StyledGenreChip>Styled Components</StyledGenreChip>
              <StyledGenreChip>CSS Modules</StyledGenreChip>
              <StyledGenreChip>Vite</StyledGenreChip>
            </div>

            <div
              className="p-3.5 rounded-2"
              style={{
                backgroundColor: "var(--bg-elevated)",
                border: "1px solid var(--border-color)",
              }}
            >
              <h3 className="h6 fw-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Assignment Compliance Overview
              </h3>
              <ul className="small text-secondary mb-0 ps-3">
                <li className="mb-1"><strong>Assignment 1:</strong> Reusable components, Props, Ternary, &amp;&amp;, and Array.map() rendering.</li>
                <li className="mb-1"><strong>Assignment 2:</strong> React Hooks, Custom Hooks, 4 Styling Approaches, and Bootstrap 5 Grid.</li>
                <li className="mb-1"><strong>Assignment 3:</strong> Multi-page SPA, React Router DOM, Form Validation, and 404 Route.</li>
                <li><strong>Assignment 4:</strong> Context API (Theme) &amp; Redux Toolkit (Watchlist / Shopping Cart).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
