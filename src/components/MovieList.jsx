import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList({ movies, onToggleWatched, onDeleteMovie, onOpenDetails }) {
  return (
    <section className="movie-list-section my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5 fw-bold mb-0" style={{ color: "var(--text-primary)" }}>
          Movie Collection
        </h2>
        <span
          className="badge font-mono"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            color: "var(--text-secondary)",
            padding: "0.4rem 0.75rem",
            fontSize: "0.8rem",
          }}
        >
          {movies.length} {movies.length === 1 ? "Title" : "Titles"}
        </span>
      </div>

      {movies && movies.length > 0 ? (
        <div className="row g-3">
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
          className="text-center py-5 px-4 rounded-3"
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px dashed var(--border-color)",
          }}
        >
          <div className="mb-2" style={{ fontSize: "2rem", color: "var(--text-muted)" }}>🎬</div>
          <h4 className="h6 fw-bold" style={{ color: "var(--text-primary)" }}>No movies matched your criteria</h4>
          <p className="small mb-0" style={{ color: "var(--text-muted)" }}>
            Try clearing search filters or add a new movie using the button above.
          </p>
        </div>
      )}
    </section>
  );
}

export default MovieList;
