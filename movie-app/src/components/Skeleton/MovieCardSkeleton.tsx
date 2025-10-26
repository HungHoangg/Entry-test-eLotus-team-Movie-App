import React from "react";
import "./MovieCardSkeleton.scss";

const MovieCardSkeleton: React.FC = () => {
  return (
    <div className="movie-card skeleton">
      <div className="poster-skeleton shimmer"></div>
      <div className="info-skeleton">
        <div className="title-skeleton shimmer"></div>
        <div className="subtitle-skeleton shimmer"></div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
