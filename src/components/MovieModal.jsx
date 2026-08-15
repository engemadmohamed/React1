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
        backgroundColor: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(12px)",
        zIndex: 1055,
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div
          className="modal-content bg-dark text-white border-warning border-opacity-40 shadow-lg rounded-4 overflow-hidden"
          style={{ background: "rgba(30, 41, 59, 0.95)", border: "1px solid rgba(234, 179, 8, 0.3)" }}
        >
          <div className="modal-header border-bottom border-secondary border-opacity-25 px-4 py-3 bg-black bg-opacity-40">
            <h5 className="modal-content-title modal-title text-warning fw-bold d-flex align-items-center gap-2">
              <span>{isEditing ? "✏️ Edit Movie Details" : "🎬 Movie Details"}</span>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4">
            {!isEditing ? (
              <div className="row g-4">
                <div className="col-12 col-md-5 text-center">
                  <div
                    className="position-relative rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-25"
                    style={{ minHeight: "260px", backgroundColor: "#0f172a" }}
                  >
                    {movie.poster ? (
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : null}
                    <div className="p-4 d-flex flex-column justify-content-center h-100">
                      <span className="display-1">🎬</span>
                      <p className="text-secondary small mt-2">{movie.genre} Cinema</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-7 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <StyledGenreChip>{movie.genre}</StyledGenreChip>
                      <span className="badge bg-secondary bg-opacity-20 text-light border border-secondary border-opacity-30">
                        🗓️ {movie.year}
                      </span>
                    </div>

                    <h2 className="h3 text-white fw-bold mb-3">{movie.title}</h2>

                    <div className="mb-3">
                      <StarRating rating={movie.rating} />
                    </div>

                    <p className="text-secondary small mb-4">
                      Rating Score: <strong className="text-warning">{movie.rating.toFixed(1)} / 10</strong>
                    </p>

                    <div className="mb-3">
                      <span className="text-secondary small d-block mb-1">Watch Status:</span>
                      {movie.watched ? (
                        <span
                          className="badge px-3 py-2 rounded-pill shadow-sm"
                          style={{ backgroundColor: "#10b981", color: "#ffffff", fontWeight: 700 }}
                        >
                          ✓ Watched
                        </span>
                      ) : (
                        <span
                          className="badge px-3 py-2 rounded-pill shadow-sm"
                          style={{ backgroundColor: "#f59e0b", color: "#0f172a", fontWeight: 800 }}
                        >
                          🎬 Not Yet Watched
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-top border-secondary border-opacity-25 d-flex gap-2">
                    <StyledActionButton $variant="primary" onClick={() => setIsEditing(true)}>
                      ✏️ Edit Movie
                    </StyledActionButton>
                    <button type="button" className="btn btn-outline-secondary rounded-3" onClick={onClose}>
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
                      className="form-control bg-secondary bg-opacity-10 text-white border-secondary"
                      value={formData.title || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label text-secondary small fw-bold">Genre</label>
                    <select
                      name="genre"
                      className="form-select bg-secondary bg-opacity-10 text-white border-secondary"
                      value={formData.genre || "Drama"}
                      onChange={handleChange}
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

                  <div className="col-12 col-md-6">
                    <label className="form-label text-secondary small fw-bold">Year</label>
                    <input
                      type="number"
                      name="year"
                      className="form-control bg-secondary bg-opacity-10 text-white border-secondary"
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
                      className="form-control bg-secondary bg-opacity-10 text-white border-secondary"
                      value={formData.rating || ""}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label text-secondary small fw-bold">Poster Image URL (Optional)</label>
                    <input
                      type="url"
                      name="poster"
                      placeholder="https://example.com/poster.jpg"
                      className="form-control bg-secondary bg-opacity-10 text-white border-secondary"
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
                        className="form-check-input bg-secondary bg-opacity-25 border-warning"
                        checked={formData.watched || false}
                        onChange={handleChange}
                      />
                      <label htmlFor="modal-watched" className="form-check-label text-white ms-2">
                        Mark as watched
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25 text-end d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded-3"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <StyledActionButton type="submit" $variant="success">
                    💾 Save Changes
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
