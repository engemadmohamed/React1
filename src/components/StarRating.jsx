import "./StarRating.css";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 >= 1;

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={
            index < fullStars
              ? "star full"
              : index === fullStars && hasHalfStar
                ? "star half"
                : "star empty"
          }
        >
          ★
        </span>
      ))}
      <span className="rating-text">({rating}/10)</span>
    </div>
  );
}

export default StarRating;
