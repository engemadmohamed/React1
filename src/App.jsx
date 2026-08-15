import { useMemo, useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
import MovieModal from "./components/MovieModal";
import useLocalStorage from "./hooks/useLocalStorage";
import {
  useMovieForm,
  useFormVisibility,
  useFilterState,
  useSortState,
  useSearchState,
} from "./hooks/useMovieAppHooks";

import {
  HeroBanner,
  MainTitle,
  EyebrowText,
  StyledActionButton,
} from "./components/StyledComponents";

const initialDefaultMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    rating: 9.3,
    genre: "Drama",
    year: 1994,
    watched: true,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "The Dark Knight",
    rating: 9.0,
    genre: "Action",
    year: 2008,
    watched: true,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Inception",
    rating: 8.8,
    genre: "Sci-Fi",
    year: 2010,
    watched: false,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    rating: 8.9,
    genre: "Crime",
    year: 1994,
    watched: true,
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Forrest Gump",
    rating: 8.8,
    genre: "Drama",
    year: 1994,
    watched: false,
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Interstellar",
    rating: 8.7,
    genre: "Sci-Fi",
    year: 2014,
    watched: true,
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
  },
];

const defaultMovieForm = {
  title: "",
  genre: "Drama",
  year: new Date().getFullYear(),
  rating: 8.0,
  watched: false,
  poster: "",
};

function App() {
  const [movies, setMovies] = useLocalStorage("react_movies_app_v1", initialDefaultMovies);
  const [filter, setFilter] = useFilterState("All");
  const [sortBy, setSortBy] = useSortState("rating");
  const [searchTerm, setSearchTerm] = useSearchState("");
  const [showForm, setShowForm] = useFormVisibility(false);
  const [newMovie, setNewMovie] = useMovieForm(defaultMovieForm);

  const [activeModalMovie, setActiveModalMovie] = useState(null);

  useEffect(() => {
    const unwatched = movies.filter((m) => !m.watched).length;
    document.title = `🎬 Movie Reviewer (${unwatched} to watch)`;
  }, [movies]);

  const watchedCount = movies.filter((movie) => movie.watched).length;

  const filteredMovies = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const searchedMovies = movies.filter((movie) => {
      if (!normalizedSearch) return true;

      return (
        movie.title.toLowerCase().includes(normalizedSearch) ||
        movie.genre.toLowerCase().includes(normalizedSearch)
      );
    });

    const statusFiltered = searchedMovies.filter((movie) => {
      if (filter === "All") return true;
      if (filter === "Watched") return movie.watched;
      if (filter === "Unwatched") return !movie.watched;
      return true;
    });

    return [...statusFiltered].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "year") return b.year - a.year;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  }, [movies, filter, searchTerm, sortBy]);

  const handleToggleWatched = (id) => {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const handleDeleteMovie = (id) => {
    setMovies((currentMovies) =>
      currentMovies.filter((movie) => movie.id !== id)
    );
  };

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewMovie((currentMovie) => ({
      ...currentMovie,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddMovie = (event) => {
    event.preventDefault();

    if (!newMovie.title.trim()) return;

    const preparedMovie = {
      id: Date.now(),
      title: newMovie.title.trim(),
      genre: newMovie.genre,
      year: Number(newMovie.year) || new Date().getFullYear(),
      rating: Number(newMovie.rating) || 0,
      watched: newMovie.watched,
      poster: newMovie.poster.trim(),
    };

    setMovies((currentMovies) => [preparedMovie, ...currentMovies]);
    setNewMovie(defaultMovieForm);
    setShowForm(false);
    setFilter("All");
    setSearchTerm("");
  };

  const handleSaveEditMovie = (updatedMovie) => {
    setMovies((currentMovies) =>
      currentMovies.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
    );
    setActiveModalMovie(updatedMovie);
  };

  return (
    <div className="app-root min-vh-100 pb-5">
      <HeroBanner>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <EyebrowText>Your Personal Cinema Dashboard</EyebrowText>
              <MainTitle>🎬 Movie Reviewer Pro</MainTitle>
              <p className="text-secondary mb-0 small">
                Track, filter, and review movies with React Hooks & Modern UI
              </p>
            </div>

            <StyledActionButton
              $variant={showForm ? "danger" : "primary"}
              onClick={() => setShowForm((open) => !open)}
            >
              {showForm ? "✖ Close Form" : "➕ Add New Movie"}
            </StyledActionButton>
          </div>
        </div>
      </HeroBanner>

      <main className="container">
        {showForm && (
          <section className="card bg-dark text-white border-warning border-opacity-50 mb-4 shadow-lg rounded-4 overflow-hidden">
            <div className="card-header bg-dark border-bottom border-secondary border-opacity-25 p-4">
              <h2 className="h4 text-warning mb-0 font-monospace">✨ Add New Movie</h2>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleAddMovie}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="title" className="form-label text-secondary fw-semibold">
                      Movie Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      className="form-control bg-secondary bg-opacity-10 text-white border-secondary"
                      value={newMovie.title}
                      onChange={handleFormChange}
                      placeholder="e.g. Interstellar"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="genre" className="form-label text-secondary fw-semibold">
                      Genre
                    </label>
                    <select
                      id="genre"
                      name="genre"
                      className="form-select bg-secondary bg-opacity-10 text-white border-secondary"
                      value={newMovie.genre}
                      onChange={handleFormChange}
                    >
                      <option value="Action" className="bg-dark">Action</option>
                      <option value="Drama" className="bg-dark">Drama</option>
                      <option value="Comedy" className="bg-dark">Comedy</option>
                      <option value="Crime" className="bg-dark">Crime</option>
                      <option value="Sci-Fi" className="bg-dark">Sci-Fi</option>
                      <option value="Adventure" className="bg-dark">Adventure</option>
                      <option value="Thriller" className="bg-dark">Thriller</option>
                      <option value="Animation" className="bg-dark">Animation</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-4">
                    <label htmlFor="year" className="form-label text-secondary fw-semibold">
                      Release Year
                    </label>
                    <input
                      id="year"
                      name="year"
                      type="number"
                      min="1900"
                      max="2100"
                      className="form-control bg-secondary bg-opacity-10 text-white border-secondary"
                      value={newMovie.year}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <label htmlFor="rating" className="form-label text-secondary fw-semibold">
                      Rating (0 to 10)
                    </label>
                    <input
                      id="rating"
                      name="rating"
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      className="form-control bg-secondary bg-opacity-10 text-white border-secondary"
                      value={newMovie.rating}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <label htmlFor="poster" className="form-label text-secondary fw-semibold">
                      Poster Image URL (Optional)
                    </label>
                    <input
                      id="poster"
                      name="poster"
                      type="url"
                      placeholder="https://example.com/poster.jpg"
                      className="form-control bg-secondary bg-opacity-10 text-white border-secondary"
                      value={newMovie.poster || ""}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="col-12 d-flex align-items-end">
                    <div className="form-check mb-2">
                      <input
                        id="watched"
                        type="checkbox"
                        name="watched"
                        className="form-check-input bg-secondary bg-opacity-25 border-warning"
                        checked={newMovie.watched}
                        onChange={handleFormChange}
                      />
                      <label htmlFor="watched" className="form-check-label text-white ms-2">
                        Mark as watched
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-end">
                  <StyledActionButton type="submit" $variant="success">
                    💾 Save Movie
                  </StyledActionButton>
                </div>
              </form>
            </div>
          </section>
        )}

        <MovieFilter
          filter={filter}
          setFilter={setFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalMovies={movies.length}
          watchedCount={watchedCount}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          movies={movies}
          onClearFilters={() => {
            setFilter("All");
            setSortBy("rating");
            setSearchTerm("");
          }}
        />

        <MovieList
          movies={filteredMovies}
          onToggleWatched={handleToggleWatched}
          onDeleteMovie={handleDeleteMovie}
          onOpenDetails={(movie) => setActiveModalMovie(movie)}
        />
      </main>

      <footer
        className="mt-5 text-center text-secondary small"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "1.5rem",
        }}
      >
        <p>© 2026 Movie Reviewer Pro | Built with React, Custom Hooks & Bootstrap</p>
      </footer>

      <MovieModal
        movie={activeModalMovie}
        isOpen={Boolean(activeModalMovie)}
        onClose={() => setActiveModalMovie(null)}
        onSaveEdit={handleSaveEditMovie}
      />
    </div>
  );
}

export default App;
