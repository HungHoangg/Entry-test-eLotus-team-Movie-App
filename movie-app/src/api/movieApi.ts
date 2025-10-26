import type { MovieDetail, MoviesResponse } from "../types/movie";
import apiClient from "./apiClient";

export const movieApi = {
  getNowPlaying: async (page: number) => {
    const res = await apiClient.get<MoviesResponse>("/movie/now_playing", {
      params: {
        language: "en-US",
        page,
      },
    });
    return res.data;
  },
   getTopRated: async (page: number) => {
    const res = await apiClient.get<MoviesResponse>("/movie/top_rated", {
      params: {
        language: "en-US",
        page,
      },
    });
    return res.data;
  },
   getDetailMovie: async (movieId: string | null) => {
    const res = await apiClient.get<MovieDetail>(`/movie/${movieId}`, {
      params: {
        language: "en-US",
      },
    });
    return res.data;
  },
};
