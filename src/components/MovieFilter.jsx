import "./MovieFilter.css";

function MovieFilter({
  filter,
  setFilter,
  sortBy,
  setSortBy,
  totalMovies,
  watchedCount,
}) {
  const unwatchedCount = totalMovies - watchedCount;

  return (
    <section className="filter-section">
      <div className="filter-container">
        <div className="filter-group">
          <label htmlFor="filter-select" className="filter-label">
            Filter by Status:
          </label>
          <select
            id="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="All">All Movies</option>
            <option value="Watched">Watched</option>
            <option value="Unwatched">Not Yet Watched</option>
          </select>
          {totalMovies > 0 && (
            <span className="filter-info">
              {filter === "All" && `Total: ${totalMovies}`}
              {filter === "Watched" && `Watched: ${watchedCount}`}
              {filter === "Unwatched" && `Unwatched: ${unwatchedCount}`}
            </span>
          )}
        </div>

        <div className="filter-group">
          <label htmlFor="sort-select" className="filter-label">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="rating">Highest Rating</option>
            <option value="year">Newest First</option>
          </select>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <span className="stat-icon">🎬</span>
          <div className="stat-content">
            <p className="stat-label">Total Movies</p>
            <p className="stat-value">{totalMovies}</p>
          </div>
        </div>

        <div
          className={`stat-card ${watchedCount > unwatchedCount ? "highlight" : ""}`}
        >
          <span className="stat-icon">✓</span>
          <div className="stat-content">
            <p className="stat-label">Watched</p>
            <p className="stat-value">{watchedCount}</p>
          </div>
        </div>

        <div
          className={`stat-card ${unwatchedCount > watchedCount ? "highlight" : ""}`}
        >
          <span className="stat-icon">🔜</span>
          <div className="stat-content">
            <p className="stat-label">To Watch</p>
            <p className="stat-value">{unwatchedCount}</p>
          </div>
        </div>

        {totalMovies > 0 && (
          <div className="stat-card">
            <span className="stat-icon">📊</span>
            <div className="stat-content">
              <p className="stat-label">Completion</p>
              <p className="stat-value">
                {Math.round((watchedCount / totalMovies) * 100)}%
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MovieFilter;
