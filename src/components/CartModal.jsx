import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, toggleCartModal } from "../redux/slices/cartSlice";

function CartModal() {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);

  if (!isOpen) return null;

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
            <h5 className="modal-title fw-bold d-flex align-items-center gap-2 m-0" style={{ fontSize: "1.1rem" }}>
              <span>Watchlist Queue</span>
              <span className="badge" style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent-primary)", border: "1px solid var(--accent-border)" }}>
                {items.length} {items.length === 1 ? "item" : "items"}
              </span>
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => dispatch(toggleCartModal())}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4">
            {items.length === 0 ? (
              <div className="text-center py-5">
                <div className="mb-2" style={{ fontSize: "2rem", color: "var(--text-muted)" }}>🎬</div>
                <h4 className="h6 fw-bold" style={{ color: "var(--text-primary)" }}>Your watchlist is empty</h4>
                <p className="small mb-0" style={{ color: "var(--text-muted)" }}>
                  Click &quot;+ Add to List&quot; on any movie card to save it to your queue.
                </p>
              </div>
            ) : (
              <div className="d-flex flex-column gap-2.5">
                {items.map((movie) => (
                  <div
                    key={movie.id}
                    className="p-3 rounded-2 d-flex align-items-center justify-content-between flex-wrap gap-3"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      {movie.poster ? (
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          style={{
                            width: "48px",
                            height: "64px",
                            objectFit: "cover",
                            borderRadius: "6px",
                          }}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "48px",
                            height: "64px",
                            backgroundColor: "var(--bg-elevated)",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.2rem",
                          }}
                        >
                          🎬
                        </div>
                      )}
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: "var(--text-primary)" }}>{movie.title}</h6>
                        <div className="d-flex align-items-center gap-2">
                          <span
                            style={{
                              fontSize: "0.72rem",
                              fontWeight: 600,
                              padding: "0.15rem 0.45rem",
                              borderRadius: "4px",
                              backgroundColor: "var(--accent-subtle)",
                              color: "var(--accent-primary)",
                            }}
                          >
                            {movie.genre}
                          </span>
                          <span className="font-mono small text-secondary">{movie.year}</span>
                          <span className="font-mono small" style={{ color: "var(--accent-primary)" }}>
                            ★ {movie.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-sm"
                      onClick={() => dispatch(removeFromCart(movie.id))}
                      style={{
                        border: "1px solid var(--border-color)",
                        color: "var(--danger)",
                        fontSize: "0.8rem",
                        borderRadius: "6px",
                        padding: "0.35rem 0.75rem",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="modal-footer p-3 d-flex justify-content-between"
            style={{
              borderTop: "1px solid var(--border-color)",
            }}
          >
            {items.length > 0 ? (
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => dispatch(clearCart())}
                style={{
                  color: "var(--danger)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                }}
              >
                Clear All
              </button>
            ) : <div />}

            <button
              type="button"
              className="btn btn-sm btn-secondary"
              onClick={() => dispatch(toggleCartModal())}
              style={{
                borderRadius: "6px",
                fontSize: "0.85rem",
                padding: "0.4rem 1rem",
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
