import StarRating from "./StarRating";
import { StyledGenreChip, StyledActionButton } from "./StyledComponents";
import "./MovieCard.css";

function MovieCard({ movie, onToggleWatched, onDeleteMovie, onOpenDetails }) {
  const genreTheme = {
    Action: { gradient: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #450a0a 100%)", emoji: "💥" },
    "Sci-Fi": { gradient: "linear-gradient(135deg, #0f4c81 0%, #1e1b4b 50%, #312e81 100%)", emoji: "🛸" },
    Drama: { gradient: "linear-gradient(135deg, #78350f 0%, #451a03 50%, #1c1917 100%)", emoji: "🎭" },
    Crime: { gradient: "linear-gradient(135deg, #3f0713 0%, #111827 50%, #18181b 100%)", emoji: "🔍" },
    Comedy: { gradient: "linear-gradient(135deg, #065f46 0%, #064e3b 50%, #022c22 100%)", emoji: "🍿" },
    Thriller: { gradient: "linear-gradient(135deg, #4c1d95 0%, #2e1065 50%, #0f172a 100%)", emoji: "⚡" },
    Adventure: { gradient: "linear-gradient(135deg, #9a3412 0%, #7c2d12 50%, #431407 100%)", emoji: "🗺️" },
    Animation: { gradient: "linear-gradient(135deg, #831843 0%, #701a75 50%, #4a044e 100%)", emoji: "🎨" },
  }[movie.genre] || { gradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", emoji: "🎬" };

  const getRatingStyle = (rating) => {
    if (rating >= 9) {
      return { backgroundColor: "rgba(16, 185, 129, 0.3)", color: "#34d399", borderColor: "#10b981" };
    }
    if (rating >= 8) {
      return { backgroundColor: "rgba(234, 179, 8, 0.3)", color: "#fde047", borderColor: "#f59e0b" };
    }
    if (rating >= 7) {
      return { backgroundColor: "rgba(59, 130, 246, 0.3)", color: "#60a5fa", borderColor: "#3b82f6" };
    }
    return { backgroundColor: "rgba(148, 163, 184, 0.3)", color: "#cbd5e1", borderColor: "#94a3b8" };
  };

  const ratingStyle = getRatingStyle(movie.rating);

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className={`card h-100 movie-card-custom ${movie.watched ? "is-watched" : ""}`}>
        
        <div
          className="poster-header position-relative p-4 d-flex flex-column justify-content-between overflow-hidden"
          style={{
            background: genreTheme.gradient,
            minHeight: "150px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          {movie.poster ? (
            <img
              src={movie.poster}
              alt={movie.title}
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-40"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : null}

          <div
            className="position-absolute end-0 bottom-0 opacity-20 pe-3 pb-2 select-none"
            style={{ fontSize: "4.5rem", pointerEvents: "none", transform: "rotate(-10deg)" }}
          >
            {genreTheme.emoji}
          </div>

          <div className="d-flex justify-content-between align-items-start position-relative z-1">
            <StyledGenreChip>{movie.genre}</StyledGenreChip>
            
            <span
              className="badge px-2.5 py-1.5 border font-monospace fs-6 shadow-sm fw-bold"
              style={{
                ...ratingStyle,
                backdropFilter: "blur(8px)",
                borderRadius: "0.6rem",
              }}
            >
              ⭐ {movie.rating.toFixed(1)}
            </span>
          </div>

          <div className="position-relative z-1 mt-3 d-flex justify-content-between align-items-center">
            <span className="badge bg-black bg-opacity-60 text-white border border-white border-opacity-20 px-2.5 py-1 font-monospace small fw-semibold">
              🗓️ {movie.year}
            </span>

            <button
              onClick={() => onOpenDetails(movie)}
              className="btn btn-sm btn-outline-light rounded-pill px-2.5 py-1 font-monospace small border-opacity-50"
              style={{ backdropFilter: "blur(4px)" }}
            >
              ℹ️ Details
            </button>
          </div>
        </div>

        <div className="card-body d-flex flex-column p-4">
          <h3
            className="card-title text-white h5 fw-bold mb-2 cursor-pointer"
            style={{ letterSpacing: "-0.3px" }}
            onClick={() => onOpenDetails(movie)}
          >
            {movie.title}
          </h3>

          <div className="mb-3">
            <StarRating rating={movie.rating} />
          </div>

          <div className="mb-4 mt-auto">
            {movie.watched ? (
              <span
                className="badge px-3 py-2 rounded-pill d-inline-flex align-items-center gap-1 shadow"
                style={{
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  boxShadow: "0 4px 12px rgba(16, 185, 129, 0.35)",
                }}
              >
                <span>✓ Watched</span>
              </span>
            ) : (
              <span
                className="badge px-3 py-2 rounded-pill d-inline-flex align-items-center gap-1 shadow"
                style={{
                  backgroundColor: "#f59e0b",
                  color: "#0f172a",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  boxShadow: "0 4px 12px rgba(245, 158, 11, 0.35)",
                }}
              >
                <span>🎬 Not Yet Watched</span>
              </span>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center gap-2 pt-3 border-top border-secondary border-opacity-25">
            <StyledActionButton
              $variant={movie.watched ? "primary" : "success"}
              onClick={() => onToggleWatched(movie.id)}
              style={{ flex: 1, justifyContent: "center", fontSize: "0.85rem" }}
            >
              {movie.watched ? "🔄 Mark Unwatched" : "✓ Mark Watched"}
            </StyledActionButton>

            <StyledActionButton
              $variant="danger"
              onClick={() => onDeleteMovie(movie.id)}
              title="Delete Movie"
              style={{ padding: "0.65rem 0.9rem" }}
            >
              🗑️
            </StyledActionButton>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieCard;
