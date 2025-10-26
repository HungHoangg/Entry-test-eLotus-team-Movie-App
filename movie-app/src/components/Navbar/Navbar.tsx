import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import menuIcon from "/src/assets/images/menu-icon.svg";
import closeIcon from "/src/assets/images/x-icon.svg";
import { NOW_PLAYING_PATH, TOP_RATED_ROUTER } from "../../utils/constant";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      setIsMenuOpen(false);
    }
  }, [scrolled, isMenuOpen]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Searching:", e.target.value);
  };

  return (
    <header
      className={`${styles.navbar} ${
        scrolled ? styles.scrolled : styles.transparent
      }`}
    >
      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.logo} onClick={() => navigate(NOW_PLAYING_PATH)}>
          <img src="/src/assets/images/movie-icon.svg" alt="logo" />
          <h1>Movie</h1>
        </div>

        {/* Menu toggle */}
        <button className={styles.toggleBtn} onClick={toggleMenu}>
          <img
            src={isMenuOpen ? closeIcon : menuIcon}
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            width={24}
            height={24}
          />
        </button>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Searching movie by name..."
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* SEARCH */}

      {/* MENU */}

      <nav className={`${styles.menu} ${isMenuOpen ? styles.show : ""}`}>
        <div className={styles.menuHeader}>
          <button className={styles.memberBtn}>
            <span>User</span>
          </button>

          <button className={styles.appBtn}>
            <img src="/src/assets/images/movie-icon.svg" alt="logo" />
            <div className={styles.appText}>
              <span className={styles.small}>Download app</span>
              <span className={styles.bold}>Movie</span>
            </div>
          </button>
        </div>
        <NavLink
          to={NOW_PLAYING_PATH}
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Now Playing
        </NavLink>

        <NavLink
          to={TOP_RATED_ROUTER}
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Top Rated
        </NavLink>

        <div className={styles.dropdown}>
          <a href="#">Movie genre</a>
          <img src="/src/assets/images/chevron-down.svg" alt="down" />
        </div>

        <div className={styles.dropdown}>
          <a href="#">Countries</a>
          <img src="/src/assets/images/chevron-down.svg" alt="down" />
        </div>

        <div className={styles.dropdown}>
          <a href="#">More</a>
          <img src="/src/assets/images/chevron-down.svg" alt="down" />
        </div>
      </nav>

      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.app}>
          <span>
            Download app <br /> Movie
          </span>
        </div>
        <button className={styles.member}>
          <span>User</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
