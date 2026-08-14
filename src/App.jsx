import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      rating: 9.3,
      genre: "Drama",
      year: 1994,
      watched: true,
    },
    {
      id: 2,
      title: "The Dark Knight",
      rating: 9.0,
      genre: "Action",
      year: 2008,
      watched: true,
    },
    {
      id: 3,
      title: "Inception",
      rating: 8.8,
      genre: "Sci-Fi",
      year: 2010,
      watched: false,
    },
    {
      id: 4,
      title: "Pulp Fiction",
      rating: 8.9,
      genre: "Crime",
      year: 1994,
      watched: true,
    },
    {
      id: 5,
      title: "Forrest Gump",
      rating: 8.8,
      genre: "Drama",
      year: 1994,
      watched: false,
    },
    {
      id: 6,
      title: "Interstellar",
      rating: 8.7,
      genre: "Sci-Fi",
      year: 2014,
      watched: true,
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const filteredMovies = movies.filter((movie) => {
    if (filter === "All") return true;
    if (filter === "Watched") return movie.watched;
    if (filter === "Unwatched") return !movie.watched;
    return true;
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "year") return b.year - a.year;
    return 0;
  });

  const handleToggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie,
      ),
    );
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎬 Movie Reviewer</h1>
        <p className="tagline">Discover and review your favorite movies</p>
      </header>

      <main className="app-main">
        <MovieFilter
          filter={filter}
          setFilter={setFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalMovies={movies.length}
          watchedCount={movies.filter((m) => m.watched).length}
        />

        <MovieList
          movies={sortedMovies}
          onToggleWatched={handleToggleWatched}
          onDeleteMovie={handleDeleteMovie}
        />
      </main>

      <footer className="app-footer">
        <p>© 2026 Movie Reviewer | Created with React</p>
      </footer>
    </div>
  );
}

export default App;
