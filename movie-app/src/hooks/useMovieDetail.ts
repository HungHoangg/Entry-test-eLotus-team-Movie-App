import { useEffect, useState } from "react";
import { movieApi } from "../api/movieApi";
import type { MovieDetail } from "../types/movie";
import { useToast } from "../components/ErrorMessage/ErrorMessage";

export const useMovieDetail = (movieId: string | null) => {
  const [movie, setMovie] = useState<MovieDetail>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { showError } = useToast();

  useEffect(() => {
    if (!movieId) {
      setError(true);
      showError("Missing Movie code");
      setLoading(false);
      return;
    }

    const fetchMovieDetail = async () => {
      try {
        const data = await movieApi.getDetailMovie(movieId);
        setMovie(data);
      } catch (err) {
        setError(true);
        showError("Can not load movie's information");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  return { movie, loading, error };
};
