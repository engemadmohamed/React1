import { Link } from "react-router-dom";
import { StyledActionButton } from "../components/StyledComponents";

function NotFound() {
  return (
    <div className="container py-5 text-center my-auto">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div
            className="p-5 rounded-3"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div className="font-mono display-4 fw-bold mb-2" style={{ color: "var(--accent-primary)" }}>
              404
            </div>
            <h1 className="h4 fw-bold mb-2" style={{ color: "var(--text-primary)" }}>
              Page Not Found
            </h1>
            <p className="text-secondary small mb-4">
              The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/">
              <StyledActionButton $variant="primary">
                Return to Library
              </StyledActionButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
