import { useMemo, useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import MovieFilter from "../components/MovieFilter";
import MovieModal from "../components/MovieModal";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  useMovieForm,
  useFormVisibility,
  useFilterState,
  useSortState,
  useSearchState,
} from "../hooks/useMovieAppHooks";
import {
  HeroBanner,
  MainTitle,
  EyebrowText,
  StyledActionButton,
} from "../components/StyledComponents";

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

function Home() {
  const [rawMovies, setMovies] = useLocalStorage("react_movies_app_v1", initialDefaultMovies);
  const movies = useMemo(
    () => (Array.isArray(rawMovies) && rawMovies.length > 0 ? rawMovies : initialDefaultMovies),
    [rawMovies]
  );

  const [filter, setFilter] = useFilterState("All");
  const [sortBy, setSortBy] = useSortState("rating");
  const [searchTerm, setSearchTerm] = useSearchState("");
  const [showForm, setShowForm] = useFormVisibility(false);
  const [newMovie, setNewMovie] = useMovieForm(defaultMovieForm);
  const [activeModalMovie, setActiveModalMovie] = useState(null);

  useEffect(() => {
    const unwatched = movies.filter((m) => !m.watched).length;
    document.title = `CinemaDB - ${unwatched} movies left to watch`;
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
    setMovies((currentMovies) => {
      const list = Array.isArray(currentMovies) && currentMovies.length > 0 ? currentMovies : initialDefaultMovies;
      return list.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      );
    });
  };

  const handleDeleteMovie = (id) => {
    setMovies((currentMovies) => {
      const list = Array.isArray(currentMovies) && currentMovies.length > 0 ? currentMovies : initialDefaultMovies;
      return list.filter((movie) => movie.id !== id);
    });
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

    setMovies((currentMovies) => {
      const list = Array.isArray(currentMovies) && currentMovies.length > 0 ? currentMovies : initialDefaultMovies;
      return [preparedMovie, ...list];
    });
    setNewMovie(defaultMovieForm);
    setShowForm(false);
    setFilter("All");
    setSearchTerm("");
  };

  const handleSaveEditMovie = (updatedMovie) => {
    setMovies((currentMovies) => {
      const list = Array.isArray(currentMovies) && currentMovies.length > 0 ? currentMovies : initialDefaultMovies;
      return list.map((m) => (m.id === updatedMovie.id ? updatedMovie : m));
    });
    setActiveModalMovie(updatedMovie);
  };

  return (
    <div>
      <HeroBanner>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <EyebrowText>Personal Film Tracker</EyebrowText>
              <MainTitle>Cinema Dashboard</MainTitle>
              <p className="text-secondary mb-0 small">
                Manage, review, and organize your favorite movies and watchlists.
              </p>
            </div>

            <StyledActionButton
              $variant={showForm ? "outline" : "primary"}
              onClick={() => setShowForm((open) => !open)}
            >
              {showForm ? "Close Form" : "+ Add New Movie"}
            </StyledActionButton>
          </div>
        </div>
      </HeroBanner>

      <main className="container">
        {showForm && (
          <section
            className="p-4 mb-4 rounded-3"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
            }}
          >
            <h2 className="h5 fw-bold mb-3" style={{ color: "var(--text-primary)" }}>
              Add New Movie
            </h2>
            <form onSubmit={handleAddMovie}>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label htmlFor="title" className="form-label text-secondary small fw-bold">
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="form-control"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    value={newMovie.title}
                    onChange={handleFormChange}
                    placeholder="e.g. Interstellar"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label htmlFor="genre" className="form-label text-secondary small fw-bold">
                    Genre
                  </label>
                  <select
                    id="genre"
                    name="genre"
                    className="form-select"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    value={newMovie.genre}
                    onChange={handleFormChange}
                  >
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Crime">Crime</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Animation">Animation</option>
                  </select>
                </div>

                <div className="col-12 col-md-4">
                  <label htmlFor="year" className="form-label text-secondary small fw-bold">
                    Release Year
                  </label>
                  <input
                    id="year"
                    name="year"
                    type="number"
                    min="1900"
                    max="2100"
                    className="form-control font-mono"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    value={newMovie.year}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="col-12 col-md-4">
                  <label htmlFor="rating" className="form-label text-secondary small fw-bold">
                    Rating (0 - 10)
                  </label>
                  <input
                    id="rating"
                    name="rating"
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    className="form-control font-mono"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    value={newMovie.rating}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="col-12 col-md-4">
                  <label htmlFor="poster" className="form-label text-secondary small fw-bold">
                    Poster Image URL (Optional)
                  </label>
                  <input
                    id="poster"
                    name="poster"
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    className="form-control"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    value={newMovie.poster || ""}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      id="watched"
                      type="checkbox"
                      name="watched"
                      className="form-check-input"
                      checked={newMovie.watched}
                      onChange={handleFormChange}
                    />
                    <label htmlFor="watched" className="form-check-label text-secondary small">
                      Already watched this movie
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-top d-flex justify-content-end gap-2" style={{ borderColor: "var(--border-color)" }}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <StyledActionButton type="submit" $variant="primary">
                  Save Movie
                </StyledActionButton>
              </div>
            </form>
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

      <MovieModal
        movie={activeModalMovie}
        isOpen={Boolean(activeModalMovie)}
        onClose={() => setActiveModalMovie(null)}
        onSaveEdit={handleSaveEditMovie}
      />
    </div>
  );
}

export default Home;
