import { Link } from "react-router-dom";
import { StyledActionButton } from "../components/StyledComponents";

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <div className="row justify-content-center py-5">
        <div className="col-12 col-md-8 col-lg-6">
          <div
            className="p-5 rounded-4 shadow-lg"
            style={{
              background: "rgba(30, 41, 59, 0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(234, 179, 8, 0.3)",
            }}
          >
            <div className="display-1 text-warning fw-bold font-monospace mb-2">404</div>
            <h1 className="h3 text-white fw-bold mb-3">Page Not Found</h1>
            <p className="text-secondary mb-4">
              Oops! The cinema page or URL you are looking for does not exist or has been moved.
            </p>
            <Link to="/">
              <StyledActionButton $variant="primary">
                🏠 Back to Home Page
              </StyledActionButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
