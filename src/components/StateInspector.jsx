import { useState } from "react";


/**
 * StateInspector Component
 * Allows the user (and teacher/evaluator) to visually inspect React useState values in real-time!
 */
function StateInspector({ stateData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
      }}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-warning shadow-lg rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            color: "#0f172a",
            border: "2px solid rgba(254, 240, 138, 0.6)",
            boxShadow: "0 10px 25px rgba(245, 158, 11, 0.4)",
          }}
        >
          <span>⚡ Live useState Inspector</span>
          <span className="badge bg-dark text-warning rounded-circle">i</span>
        </button>
      ) : (
        <div
          className="card bg-dark text-white shadow-lg border-warning rounded-4 overflow-hidden"
          style={{
            width: "360px",
            maxHeight: "80vh",
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(245, 158, 11, 0.4)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className="card-header bg-dark border-bottom border-warning border-opacity-25 d-flex justify-content-between align-items-center py-3 px-3">
            <div className="d-flex align-items-center gap-2">
              <span className="fs-5">🔍</span>
              <h5 className="mb-0 text-warning fw-bold fs-6 font-monospace">
                React useState Real-time Monitor
              </h5>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-sm btn-outline-secondary rounded-circle"
              style={{ width: "28px", height: "28px", padding: 0 }}
            >
              ✕
            </button>
          </div>

          <div className="card-body p-3 overflow-auto font-monospace" style={{ fontSize: "0.8rem" }}>
            <p className="text-secondary small mb-2">
              This panel shows the current values stored inside React <code>useState</code> hooks in real-time.
            </p>

            <div className="bg-black bg-opacity-60 p-3 rounded-3 border border-secondary border-opacity-25">
              <div className="mb-2">
                <span className="text-info fw-bold">filter (useState):</span>{" "}
                <span className="text-warning">"{stateData.filter}"</span>
              </div>
              <div className="mb-2">
                <span className="text-info fw-bold">sortBy (useState):</span>{" "}
                <span className="text-warning">"{stateData.sortBy}"</span>
              </div>
              <div className="mb-2">
                <span className="text-info fw-bold">searchTerm (useState):</span>{" "}
                <span className="text-warning">"{stateData.searchTerm || "(empty)"}"</span>
              </div>
              <div className="mb-2">
                <span className="text-info fw-bold">showForm (useState):</span>{" "}
                <span className={stateData.showForm ? "text-success" : "text-danger"}>
                  {String(stateData.showForm)}
                </span>
              </div>
              <div className="mb-2">
                <span className="text-info fw-bold">movies.length (useLocalStorage / useState):</span>{" "}
                <span className="text-success fw-bold">{stateData.totalMovies}</span>
              </div>
              <div className="mb-2">
                <span className="text-info fw-bold">watchedCount:</span>{" "}
                <span className="text-success">{stateData.watchedCount}</span>
              </div>
              <hr className="my-2 border-secondary border-opacity-50" />
              <div>
                <span className="text-info fw-bold">newMovie Draft State:</span>
                <pre
                  className="bg-dark text-success p-2 rounded mt-1 mb-0"
                  style={{ fontSize: "0.75rem" }}
                >
                  {JSON.stringify(stateData.newMovie, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StateInspector;
