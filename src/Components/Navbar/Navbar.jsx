import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import FeedbackButton from "../Feedback Button/FeedbackButton";

function Navbar({ logo = false, search = false, feedback = false }) {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper} onClick={() => navigate(`/`)}>
          {logo ? <Logo id={styles.logo} /> : null}
        </div>
        <FeedbackButton feedback={feedback}/>
      </nav>
    </div>
  );
}

export default Navbar;
