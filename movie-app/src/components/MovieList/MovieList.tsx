import type { Movie } from "../../types/movie";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardSkeleton from "../Skeleton/MovieCardSkeleton";
import "./MovieList.scss";

interface MovieListProps {
  movies: Movie[];
  loading: boolean;
}

export const MovieList = (props: MovieListProps) => {
  const { movies, loading } = props;
  if (loading || !movies || movies.length === 0)
    return (
      <div className="movie-list">
        {Array.from({ length: 12 }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
        <MovieCardSkeleton />
      </div>
    );

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          originalTitle={movie.original_title}
          posterPath={movie.poster_path || ""}
          movieId={movie.id}
        />
      ))}
    </div>
  );
};
