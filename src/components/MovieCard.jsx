import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import StarRating from "./StarRating";
import { StyledGenreChip, StyledActionButton } from "./StyledComponents";
import "./MovieCard.css";

function MovieCard({ movie, onToggleWatched, onDeleteMovie, onOpenDetails }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === movie.id);

  const handleCartToggle = () => {
    if (isInCart) {
      dispatch(removeFromCart(movie.id));
    } else {
      dispatch(addToCart(movie));
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="movie-card">
        <div className="movie-poster-wrap">
          {movie.poster ? (
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-poster-img"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div className="movie-poster-fallback">🎬</div>
          )}

          <div
            className="position-absolute top-0 end-0 m-2.5 d-flex gap-1.5"
            style={{ zIndex: 2 }}
          >
            <span
              className="badge font-mono"
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                color: "#f59e0b",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                fontSize: "0.8rem",
                padding: "0.35rem 0.6rem",
              }}
            >
              ★ {movie.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="movie-card-body">
          <div className="d-flex justify-content-between align-items-center mb-1.5">
            <StyledGenreChip>{movie.genre}</StyledGenreChip>
            <span className="font-mono small text-secondary">{movie.year}</span>
          </div>

          <h3
            className="movie-card-title"
            onClick={() => onOpenDetails(movie)}
          >
            {movie.title}
          </h3>

          <div className="mb-3">
            <StarRating rating={movie.rating} />
          </div>

          <div className="d-flex align-items-center justify-content-between mb-3 mt-auto">
            <span
              className={`status-tag ${
                movie.watched ? "status-watched" : "status-unwatched"
              }`}
            >
              {movie.watched ? "● Watched" : "○ Plan to Watch"}
            </span>

            <button
              type="button"
              className="btn btn-sm"
              onClick={handleCartToggle}
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                borderRadius: "6px",
                border: isInCart ? "1px solid var(--border-color)" : "none",
                backgroundColor: isInCart ? "transparent" : "var(--accent-subtle)",
                color: isInCart ? "var(--text-muted)" : "var(--accent-primary)",
              }}
            >
              {isInCart ? "In Watchlist" : "+ Add to List"}
            </button>
          </div>

          <div className="d-flex align-items-center gap-2 pt-2.5 border-top" style={{ borderColor: "var(--border-color)" }}>
            <StyledActionButton
              $variant={movie.watched ? "outline" : "success"}
              onClick={() => onToggleWatched(movie.id)}
              style={{ flex: 1, justifyContent: "center", fontSize: "0.8rem", padding: "0.45rem" }}
            >
              {movie.watched ? "Mark Unwatched" : "Mark Watched"}
            </StyledActionButton>

            <button
              type="button"
              className="btn btn-sm"
              onClick={() => onOpenDetails(movie)}
              title="Edit Details"
              style={{
                border: "1px solid var(--border-color)",
                color: "var(--text-secondary)",
                borderRadius: "6px",
                padding: "0.45rem 0.65rem",
                fontSize: "0.8rem",
              }}
            >
              Edit
            </button>

            <button
              type="button"
              className="btn btn-sm"
              onClick={() => onDeleteMovie(movie.id)}
              title="Delete Movie"
              style={{
                border: "1px solid var(--border-color)",
                color: "var(--danger)",
                borderRadius: "6px",
                padding: "0.45rem 0.65rem",
                fontSize: "0.8rem",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
