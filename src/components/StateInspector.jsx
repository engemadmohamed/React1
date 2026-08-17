import { useState } from "react";

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
          className="btn btn-sm btn-outline-secondary"
          style={{
            backgroundColor: "var(--bg-surface)",
            color: "var(--text-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "6px",
            fontSize: "0.75rem",
            padding: "0.35rem 0.65rem",
          }}
        >
          State Monitor
        </button>
      ) : (
        <div
          className="card shadow"
          style={{
            width: "320px",
            maxHeight: "75vh",
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-color)",
            borderRadius: "8px",
          }}
        >
          <div className="card-header d-flex justify-content-between align-items-center py-2 px-3" style={{ borderBottom: "1px solid var(--border-color)" }}>
            <span className="small fw-bold" style={{ color: "var(--text-primary)" }}>
              React State Monitor
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-sm btn-close"
              style={{ fontSize: "0.65rem" }}
            ></button>
          </div>

          <div className="card-body p-3 overflow-auto font-mono" style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
            <div><strong>filter:</strong> {stateData.filter}</div>
            <div><strong>sortBy:</strong> {stateData.sortBy}</div>
            <div><strong>searchTerm:</strong> {stateData.searchTerm || "(none)"}</div>
            <div><strong>showForm:</strong> {String(stateData.showForm)}</div>
            <div><strong>totalMovies:</strong> {stateData.totalMovies}</div>
            <div><strong>watchedCount:</strong> {stateData.watchedCount}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StateInspector;
