import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(location.search);
    params.set("page", page.toString());
    navigate(`${location.pathname}?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        disabled={currentPage <= 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        <img src="/src/assets/images/arrow-left.svg" alt="left" />
      </button>

      <div className={styles.center}>
        <span>Page</span>
        <input
          type="number"
          min={1}
          max={totalPages}
          value={currentPage}
          onChange={(e) => goToPage(Number(e.target.value))}
        />
        <span> / {totalPages}</span>
      </div>

      <button
        className={styles.arrow}
        disabled={currentPage >= totalPages}
        onClick={() => goToPage(currentPage + 1)}
      >
        <img src="/src/assets/images/arrow-right.svg" alt="right" />
      </button>
    </div>
  );
};

export default Pagination;
