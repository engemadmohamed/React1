import StarRating from "./StarRating";
import "./MovieCard.css";

function MovieCard({ movie, onToggleWatched, onDeleteMovie }) {
  const getRatingColor = (rating) => {
    return rating >= 9
      ? "excellent"
      : rating >= 8
        ? "great"
        : rating >= 7
          ? "good"
          : "average";
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <div className={`rating-badge ${getRatingColor(movie.rating)}`}>
          <span className="rating-value">{movie.rating.toFixed(1)}</span>
        </div>
        {movie.watched && <div className="watched-badge">✓ Watched</div>}
      </div>

      <div className="movie-content">
        <h3 className="movie-title">{movie.title}</h3>

        <div className="movie-meta">
          <span className="genre-badge">{movie.genre}</span>
          <span className="year">{movie.year}</span>
        </div>

        <div className="movie-rating">
          <StarRating rating={movie.rating} />
        </div>

        <div className="movie-status">
          <p className={movie.watched ? "status-watched" : "status-unwatched"}>
            Status:{" "}
            {movie.watched ? "📺 Already Watched" : "🎬 Not Yet Watched"}
          </p>
        </div>

        <div className="movie-actions">
          <button
            className={`btn-toggle ${movie.watched ? "watched" : "unwatched"}`}
            onClick={() => onToggleWatched(movie.id)}
          >
            {movie.watched ? "🔄 Mark Unwatched" : "✓ Mark Watched"}
          </button>
          <button
            className="btn-delete"
            onClick={() => onDeleteMovie(movie.id)}
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
