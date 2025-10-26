import styles from "./NowPlaying.module.scss";
import { MovieList } from "../../components/MovieList/MovieList";
import { useNowPlaying } from "../../hooks/useNowPlaying";
import Pagination from "../../components/Pagination/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NowPlaying = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const currentPage = Number(query.get("page")) || 1;
  const { movies, loading, totalPages, error } = useNowPlaying(currentPage);

  useEffect(() => {
    if (!query.get("page")) {
      navigate(`${location.pathname}?page=1`, { replace: true });
    }
  }, []); 

  return (
    <div className={styles.home}>
      <h2>Now playing</h2>
      <div className={styles.filter}>
        <span>Filter</span>
      </div>
      <MovieList movies={movies} loading={loading} />
      {!error && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
};
export default NowPlaying;
