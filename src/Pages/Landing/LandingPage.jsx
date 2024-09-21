import React from "react";
import styles from "./LandingPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar logo={true} search={true} feedback={true}/>
      <div className={styles.landingPageSearchWrapper}>
        Search Bar
      </div>
    </>
  );
}

export default LandingPage;
