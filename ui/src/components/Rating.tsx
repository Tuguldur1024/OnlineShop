import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type StarRatingProps = {
  rating: number;
  totalReviews: number;
};

const StarRating: React.FC<StarRatingProps> = (props: StarRatingProps) => {
  const { rating, totalReviews } = props;
  const roundedRating = Math.round(rating * 2) / 2;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} color="gold" />);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<FaStarHalfAlt key={i} color="gold" />);
      } else {
        stars.push(<FaRegStar key={i} color="gold" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex items-center">
      <div className="flex">{renderStars()}</div>
      <span className="font-normal flex text-sm text-[#09090B]">
        {rating.toFixed(1)}
        <p className="text-[#71717A]"> ({totalReviews}) </p>
      </span>
    </div>
  );
};

export default StarRating;
