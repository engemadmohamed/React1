import { useMemo } from "react";
import styles from "./MovieFilter.module.css";
import { StyledActionButton } from "./StyledComponents";

function MovieFilter({
  filter,
  setFilter,
  sortBy,
  setSortBy,
  totalMovies,
  watchedCount,
  searchTerm,
  setSearchTerm,
  onClearFilters,
  movies = [],
}) {
  const unwatchedCount = totalMovies - watchedCount;
  const completionPercentage = totalMovies > 0 ? Math.round((watchedCount / totalMovies) * 100) : 0;

  const topRatedMovie = useMemo(() => {
    if (!movies || movies.length === 0) return null;
    return movies.reduce((top, m) => (m.rating > (top?.rating || 0) ? m : top), movies[0]);
  }, [movies]);

  const topGenre = useMemo(() => {
    if (!movies || movies.length === 0) return "N/A";
    const genreCounts = movies.reduce((acc, m) => {
      acc[m.genre] = (acc[m.genre] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(genreCounts).reduce((a, b) => (genreCounts[a] > genreCounts[b] ? a : b), "N/A");
  }, [movies]);

  const avgRating = useMemo(() => {
    if (!movies || movies.length === 0) return "0.0";
    const sum = movies.reduce((acc, m) => acc + (Number(m.rating) || 0), 0);
    return (sum / movies.length).toFixed(1);
  }, [movies]);

  return (
    <section className={styles.filterSection}>
      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <label htmlFor="movie-search" className={styles.filterLabel}>
            🔍 Search Library
          </label>
          <input
            id="movie-search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title or genre..."
            className={styles.searchInput}
          />
        </div>

        <StyledActionButton $variant="primary" onClick={onClearFilters}>
          🔄 Reset Filters
        </StyledActionButton>
      </div>

      <div className={styles.filterRow}>
        <div>
          <label htmlFor="filter-select" className={styles.filterLabel}>
            Filter Status
          </label>
          <select
            id="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={`${styles.filterSelect} form-select text-white`}
            style={{ backgroundColor: "rgba(15, 23, 42, 0.9)", borderColor: "rgba(234, 179, 8, 0.4)" }}
          >
            <option value="All" className="bg-dark text-white">All Movies ({totalMovies})</option>
            <option value="Watched" className="bg-dark text-white">Watched Movies ({watchedCount})</option>
            <option value="Unwatched" className="bg-dark text-white">Not Yet Watched ({unwatchedCount})</option>
          </select>
        </div>

        <div>
          <label htmlFor="sort-select" className={styles.filterLabel}>
            Sort By
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`${styles.filterSelect} form-select text-white`}
            style={{ backgroundColor: "rgba(15, 23, 42, 0.9)", borderColor: "rgba(234, 179, 8, 0.4)" }}
          >
            <option value="rating" className="bg-dark text-white">Highest Rating ⭐</option>
            <option value="year" className="bg-dark text-white">Newest Release 📅</option>
            <option value="title" className="bg-dark text-white">Title A-Z 🔤</option>
          </select>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statIcon}>🎬</span>
          <div>
            <p className={styles.statLabel}>Total</p>
            <h4 className={styles.statValue}>{totalMovies}</h4>
          </div>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statIcon}>✅</span>
          <div>
            <p className={styles.statLabel}>Watched</p>
            <h4 className={styles.statValue} style={{ color: "#34d399" }}>{watchedCount}</h4>
          </div>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statIcon}>🏆</span>
          <div>
            <p className={styles.statLabel}>Top Movie</p>
            <h4 className={styles.statValue} style={{ color: "#fef08a", fontSize: "0.95rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "110px" }}>
              {topRatedMovie ? topRatedMovie.title : "N/A"}
            </h4>
          </div>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statIcon}>🎭</span>
          <div>
            <p className={styles.statLabel}>Top Genre</p>
            <h4 className={styles.statValue} style={{ color: "#fbbf24" }}>{topGenre}</h4>
          </div>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statIcon}>⭐</span>
          <div>
            <p className={styles.statLabel}>Avg Rating</p>
            <h4 className={styles.statValue} style={{ color: "#60a5fa" }}>{avgRating}</h4>
          </div>
        </div>
      </div>

      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBarFill}
          style={{
            width: `${completionPercentage}%`,
            transition: "width 0.5s ease-in-out",
          }}
        />
      </div>
    </section>
  );
}

export default MovieFilter;
