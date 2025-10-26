import styles from "./TopRated.module.scss";
import { MovieList } from "../../components/MovieList/MovieList";
import { useTopRated } from "../../hooks/useTopRated";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";

const TopRated = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const currentPage = Number(query.get("page")) || 1;
  const { movies, loading, error, totalPages } = useTopRated(currentPage);

  useEffect(() => {
    if (!query.get("page")) {
      navigate(`${location.pathname}?page=1`, { replace: true });
    }
  }, []);
  return (
    <div className={styles.home}>
      <h2>Top Rated</h2>
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
export default TopRated;
