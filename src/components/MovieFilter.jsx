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
    if (!movies || movies.length === 0) return "None";
    const genreCounts = movies.reduce((acc, m) => {
      acc[m.genre] = (acc[m.genre] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(genreCounts).reduce((a, b) => (genreCounts[a] > genreCounts[b] ? a : b), "None");
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
            Search Library
          </label>
          <input
            id="movie-search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter by title or genre..."
            className={styles.searchInput}
          />
        </div>

        <StyledActionButton $variant="outline" onClick={onClearFilters}>
          Reset Filters
        </StyledActionButton>
      </div>

      <div className={styles.filterRow}>
        <div>
          <label htmlFor="filter-select" className={styles.filterLabel}>
            Viewing Status
          </label>
          <select
            id="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="All">All Movies ({totalMovies})</option>
            <option value="Watched">Watched ({watchedCount})</option>
            <option value="Unwatched">Unwatched ({unwatchedCount})</option>
          </select>
        </div>

        <div>
          <label htmlFor="sort-select" className={styles.filterLabel}>
            Sort Library
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="rating">Rating (High to Low)</option>
            <option value="year">Year (Newest First)</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Total Library</p>
          <h4 className={styles.statValue}>{totalMovies}</h4>
        </div>

        <div className={styles.statCard}>
          <p className={styles.statLabel}>Watched</p>
          <h4 className={styles.statValue} style={{ color: "var(--success)" }}>{watchedCount}</h4>
        </div>

        <div className={styles.statCard}>
          <p className={styles.statLabel}>Top Rated</p>
          <h4 className={styles.statValue} style={{ fontSize: "0.95rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {topRatedMovie ? topRatedMovie.title : "None"}
          </h4>
        </div>

        <div className={styles.statCard}>
          <p className={styles.statLabel}>Top Genre</p>
          <h4 className={styles.statValue} style={{ fontSize: "1rem" }}>{topGenre}</h4>
        </div>

        <div className={styles.statCard}>
          <p className={styles.statLabel}>Average Rating</p>
          <h4 className={styles.statValue} style={{ color: "var(--accent-primary)" }}>{avgRating}</h4>
        </div>
      </div>

      <div className={styles.progressBarContainer} title={`Watch progress: ${completionPercentage}%`}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
    </section>
  );
}

export default MovieFilter;
