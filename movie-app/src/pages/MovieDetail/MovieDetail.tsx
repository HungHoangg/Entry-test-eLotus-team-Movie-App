import { useLocation } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import "./MovieDetail.scss";
import TagTopic from "../../components/TagTopic/TagTopic";
import MovieDetailSkeleton from "../../components/Skeleton/MovieDetailSkeleton";

const MovieDetail = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const movieId = query.get("ref");

  const { movie, loading, error } = useMovieDetail(movieId);

  if (loading) return <MovieDetailSkeleton />;
  if (error) return <MovieDetailSkeleton />;
  if (!movie) return <MovieDetailSkeleton />;
  const backdropUrl = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";

  const posterUrl = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <div className="movie-detail">
      {/* Background*/}
      <div
        className="movie-detail__backdrop"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      ></div>

      {/* Main content */}
      <div className="movie-detail__content">
        {/* Overview */}
        <div className="movie-detail__overview">
          <div className="movie-detail__poster">
            <img src={posterUrl} alt={movie?.title} />
          </div>

          <div className="movie-detail__info">
            <h1 className="title">{movie?.title}</h1>
            <p className="original-title">{movie?.original_title}</p>

            <div className="movie-detail__tags">
              {(movie?.genres ?? [])?.map((item, index) => {
                return <TagTopic value={item?.name} key={index} />;
              })}
            </div>
            <div className="actions">
              <button className="watch-btn">Watch now</button>
              <button className="like-btn">Add to favorite</button>
              <button className="like-btn">Share</button>
            </div>
          </div>
        </div>

        {/* Detail Information */}
        <div className="movie-detail__tags">
          <TagTopic
            value={movie?.vote_average.toFixed(1) || 0}
            label="IMDb"
            variant="imdb"
          />
          <TagTopic value={!movie?.adult ? "K" : "18"} variant="adult" />
          <TagTopic
            value={movie?.release_date?.split("-")[0] || "N/A"}
            variant="basic-tag"
          />
          <TagTopic
            value={`${movie?.runtime || 120} minutes`}
            variant="basic-tag"
          />
          <TagTopic value={movie?.status} variant="basic-tag" />
        </div>
        <div>
          <h1>Introduce:</h1>
          <p className="movie-detail__overview">{movie?.overview}</p>
        </div>
        <div className="movie-detail__detail-info">
          <div className="movie-detail__detail-line">
            <span>Duration:</span>
            {movie?.runtime || 120} minutes
          </div>

          <div className="movie-detail__detail-line">
            <span>
              {movie?.production_countries?.length > 1
                ? "Countries"
                : "Country"}
              :
            </span>
            {movie?.production_countries?.map((c) => c.name).join(", ") ||
              "N/A"}
          </div>

          <div className="movie-detail__detail-line">
            <span>
              {movie?.production_companies?.length > 1
                ? "Film production companies"
                : "Film production company"}
              :
            </span>

            {movie?.production_companies?.map((c) => c.name).join(", ") ||
              "N/A"}
          </div>

          <div className="movie-detail__detail-line">
            <span>
              {movie?.spoken_languages?.length > 1 ? "Languages" : "Language"}:
            </span>

            {movie?.spoken_languages?.map((c) => c.name).join(", ") || "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
