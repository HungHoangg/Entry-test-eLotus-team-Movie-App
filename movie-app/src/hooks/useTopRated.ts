import { useEffect, useState } from "react";
import { movieApi } from "../api/movieApi";
import type { Movie } from "../types/movie";
import { useToast } from "../components/ErrorMessage/ErrorMessage";

export const useTopRated = (page: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const { showError } = useToast();

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const data = await movieApi.getTopRated(page);
        setMovies(data.results || []);
        setTotalPages(data?.total_pages || 0);
      } catch (err) {
        setError(true);
        showError("Cannot show movie list!!!");
      } finally {
        setLoading(false);
      }
    };

    fetchTopRated();
  }, [page]);

  return { movies, loading, totalPages, error };
};
