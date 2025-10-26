import { useEffect, useState } from "react";
import { movieApi } from "../api/movieApi";
import type { Movie } from "../types/movie";
import { useToast } from "../components/ErrorMessage/ErrorMessage";

export const useNowPlaying = (page: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const { showError } = useToast();
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const data = await movieApi.getNowPlaying(page);
        setMovies(data?.results || []);
        setTotalPages(data?.total_pages || 0);
      } catch (err) {
        setError(true)
        showError("Cannot show movie list!!!");
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
  }, [page]);

  return { movies, loading, totalPages, error };
};
