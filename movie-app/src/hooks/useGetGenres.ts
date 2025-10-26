import { useEffect, useState } from "react";
import { movieApi } from "../api/movieApi";
import { useToast } from "../components/ErrorMessage/ErrorMessage";
import type { Genre } from "../types/movie";

export const useGetGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { showError } = useToast();

  useEffect(() => {
    const fetchGenresList = async () => {
      try {
        const data = await movieApi.getGenreList();
        setGenres(data.genres || []);
      } catch (err) {
        showError("Cannot show genres list!!!");
      } finally {
        setLoading(false);
      }
    };

    fetchGenresList();
  }, []);

  return { genres, loading };
};
