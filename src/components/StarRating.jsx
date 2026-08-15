import "./StarRating.css";

function StarRating({ rating }) {
  const maxStars = 5;
  const normalizedRating = rating / 2;
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;

  return (
    <div className="star-rating d-flex align-items-center gap-1">
      {[...Array(maxStars)].map((_, index) => {
        const isFull = index < fullStars;
        const isHalf = index === fullStars && hasHalfStar;

        const starInlineStyle = {
          color: isFull || isHalf ? "#eab308" : "#475569",
          fontSize: "1.2rem",
          transition: "transform 0.2s ease, color 0.2s ease",
          textShadow: isFull || isHalf ? "0 0 8px rgba(234, 179, 8, 0.5)" : "none",
          display: "inline-block",
        };

        return (
          <span key={index} style={starInlineStyle} className="star-icon">
            {isFull ? "★" : isHalf ? "½" : "☆"}
          </span>
        );
      })}

      <span
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "#94a3b8",
          marginLeft: "0.4rem",
        }}
      >
        ({rating.toFixed(1)}/10)
      </span>
    </div>
  );
}

export default StarRating;
