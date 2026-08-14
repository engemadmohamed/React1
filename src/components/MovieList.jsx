import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList({ movies, onToggleWatched, onDeleteMovie }) {
  return (
    <section className="movie-list-section">
      <div className="list-header">
        <h2>📽️ Movie Collection</h2>
        <span className="count">{movies.length} movies</span>
      </div>

      {movies && movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onToggleWatched={onToggleWatched}
              onDeleteMovie={onDeleteMovie}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>🔍 No movies found. Try adjusting your filters!</p>
        </div>
      )}
    </section>
  );
}

export default MovieList;
