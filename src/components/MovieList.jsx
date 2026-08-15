import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList({ movies, onToggleWatched, onDeleteMovie, onOpenDetails }) {
  return (
    <section className="movie-list-section my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white h4 fw-bold mb-0">📽️ Movie Collection</h2>
        <span
          className="badge bg-dark border border-warning text-warning px-3 py-2 fs-6"
          style={{ borderRadius: "2rem" }}
        >
          {movies.length} {movies.length === 1 ? "Movie" : "Movies"}
        </span>
      </div>

      {movies && movies.length > 0 ? (
        <div className="row g-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onToggleWatched={onToggleWatched}
              onDeleteMovie={onDeleteMovie}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      ) : (
        <div
          className="text-center py-5 px-4 rounded-4"
          style={{
            background: "rgba(30, 41, 59, 0.4)",
            border: "2px dashed rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="fs-1 mb-2">🎬</div>
          <h4 className="text-white h5">No Movies Found</h4>
          <p className="text-secondary mb-0">
            Try adjusting your search terms, changing filters, or adding a new movie.
          </p>
        </div>
      )}
    </section>
  );
}

export default MovieList;
