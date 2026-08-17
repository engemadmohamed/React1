import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import { StyledGenreChip, StyledActionButton } from "./StyledComponents";

function MovieModal({ movie, isOpen, onClose, onSaveEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(movie || {});

  useEffect(() => {
    setFormData(movie || {});
    setIsEditing(false);
  }, [movie]);

  if (!isOpen || !movie) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSaveEdit({
      ...formData,
      year: Number(formData.year) || new Date().getFullYear(),
      rating: Number(formData.rating) || 0,
    });
    setIsEditing(false);
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)",
        zIndex: 1055,
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div
          className="modal-content"
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-color)",
            borderRadius: "12px",
            color: "var(--text-primary)",
          }}
        >
          <div
            className="modal-header px-4 py-3"
            style={{
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            <h5 className="modal-title fw-bold m-0" style={{ fontSize: "1.1rem" }}>
              {isEditing ? "Edit Movie Details" : "Movie Details"}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4">
            {!isEditing ? (
              <div className="row g-4">
                <div className="col-12 col-md-5 text-center">
                  <div
                    className="rounded-3 overflow-hidden"
                    style={{
                      minHeight: "260px",
                      backgroundColor: "var(--bg-elevated)",
                      border: "1px solid var(--border-color)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {movie.poster ? (
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-100 h-100 object-fit-cover"
                        style={{ maxHeight: "320px" }}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="p-4 text-secondary">
                        <div style={{ fontSize: "3rem" }}>🎬</div>
                        <div className="small mt-2">{movie.genre}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-12 col-md-7 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <StyledGenreChip>{movie.genre}</StyledGenreChip>
                      <span className="font-mono small text-secondary">{movie.year}</span>
                    </div>

                    <h2 className="h4 fw-bold mb-2" style={{ color: "var(--text-primary)" }}>
                      {movie.title}
                    </h2>

                    <div className="mb-3">
                      <StarRating rating={movie.rating} />
                    </div>

                    <p className="small text-secondary mb-3">
                      Rating Score: <strong className="font-mono" style={{ color: "var(--accent-primary)" }}>{movie.rating.toFixed(1)} / 10</strong>
                    </p>

                    <div className="mb-3">
                      <span className="text-secondary small d-block mb-1">Status:</span>
                      <span
                        className="badge"
                        style={{
                          backgroundColor: movie.watched ? "rgba(16, 185, 129, 0.15)" : "var(--accent-subtle)",
                          color: movie.watched ? "var(--success)" : "var(--accent-primary)",
                          border: `1px solid ${movie.watched ? "rgba(16, 185, 129, 0.3)" : "var(--accent-border)"}`,
                          padding: "0.4rem 0.75rem",
                          borderRadius: "6px",
                          fontSize: "0.8rem",
                        }}
                      >
                        {movie.watched ? "Watched" : "Not Watched"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-top d-flex gap-2" style={{ borderColor: "var(--border-color)" }}>
                    <StyledActionButton $variant="primary" onClick={() => setIsEditing(true)}>
                      Edit Movie
                    </StyledActionButton>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={onClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSave}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label text-secondary small fw-bold">Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-color)",
                        color: "var(--text-primary)",
                      }}
                      value={formData.title || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label text-secondary small fw-bold">Genre</label>
                    <select
                      name="genre"
                      className="form-select"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-color)",
                        color: "var(--text-primary)",
                      }}
                      value={formData.genre || "Drama"}
                      onChange={handleChange}
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

                  <div className="col-12 col-md-6">
                    <label className="form-label text-secondary small fw-bold">Year</label>
                    <input
                      type="number"
                      name="year"
                      className="form-control font-mono"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-color)",
                        color: "var(--text-primary)",
                      }}
                      value={formData.year || ""}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label text-secondary small fw-bold">Rating (0 - 10)</label>
                    <input
                      type="number"
                      name="rating"
                      min="0"
                      max="10"
                      step="0.1"
                      className="form-control font-mono"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-color)",
                        color: "var(--text-primary)",
                      }}
                      value={formData.rating || ""}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label text-secondary small fw-bold">Poster Image URL (Optional)</label>
                    <input
                      type="url"
                      name="poster"
                      placeholder="https://images.unsplash.com/..."
                      className="form-control"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-color)",
                        color: "var(--text-primary)",
                      }}
                      value={formData.poster || ""}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="modal-watched"
                        name="watched"
                        className="form-check-input"
                        checked={formData.watched || false}
                        onChange={handleChange}
                      />
                      <label htmlFor="modal-watched" className="form-check-label text-secondary small">
                        Already watched this movie
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top d-flex justify-content-end gap-2" style={{ borderColor: "var(--border-color)" }}>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <StyledActionButton type="submit" $variant="success">
                    Save Changes
                  </StyledActionButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
