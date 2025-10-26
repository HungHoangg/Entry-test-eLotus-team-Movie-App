import React from "react";
import "./MovieDetailSkeleton.scss";
import TagTopicSkeleton from "./TagTopicSkeleton";

const MovieDetailSkeleton: React.FC = () => {
  return (
    <div className="movie-detail-skeleton">
      {/* Background */}
      <div className="movie-detail-skeleton__backdrop"></div>

      {/* Main content */}
      <div className="movie-detail-skeleton__content">
        <div className="movie-detail-skeleton__overview">
          <div className="movie-detail-skeleton__poster shimmer"></div>

          <div className="movie-detail-skeleton__info">
            <div className="skeleton-title shimmer"></div>
            <div className="skeleton-subtitle shimmer"></div>

            <div className="skeleton-tags">
              {Array.from({ length: 4 }).map((_, i) => (
                <TagTopicSkeleton key={i} />
              ))}
            </div>

            <div className="skeleton-buttons">
              <div className="skeleton-btn shimmer"></div>
              <div className="skeleton-btn shimmer"></div>
              <div className="skeleton-btn shimmer"></div>
            </div>
          </div>
        </div>

        <div className="skeleton-section">
          <div className="skeleton-line shimmer" style={{ width: "40%" }}></div>
          <div className="skeleton-line shimmer" style={{ width: "90%" }}></div>
          <div className="skeleton-line shimmer" style={{ width: "80%" }}></div>
          <div className="skeleton-line shimmer" style={{ width: "85%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSkeleton;
