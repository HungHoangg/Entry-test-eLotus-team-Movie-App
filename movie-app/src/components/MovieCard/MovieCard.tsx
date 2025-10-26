import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.scss";

interface MovieCardProps {
  title: string;
  originalTitle?: string;
  posterPath?: string;
  movieId: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  originalTitle,
  posterPath,
  movieId,
}) => {
  const navigate = useNavigate();
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "";

  const handleClick = () => {
    navigate(`/movie/${encodeURIComponent(title)}?ref=${movieId}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <div className="poster-wrapper">
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        {originalTitle && <p className="movie-original">{originalTitle}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
