import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FeedbackButton from "../Feedback Button/FeedbackButton";
import { useNavigate } from "react-router-dom";

function Navbar({ data, logo = false, search = false, feedback = false }) {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper} onClick={() => navigate(`/`)}>
          {logo ? <Logo id={styles.logo} /> : null}
        </div>
        {search ? (
          <div className={styles.searchWrapper}>
            <SearchBar
              placeholder="Search a album of your choice"
              data={data}
            />
          </div>
        ) : null}
        <FeedbackButton feedback={feedback} />
      </nav>
    </div>
  );
}

export default Navbar;
