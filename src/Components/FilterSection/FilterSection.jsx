import React from "react";
import styles from "./FilterSection.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

function FilterSection({ data, type, loadingState }) {
  return (
    <div className={styles.sectionWrapper}>
      {data.length ? (
        <div className={styles.cardWrapper}>
          <Carousel
            data={data}
            renderCardComponent={(item) => <Card data={item} type={type} />}
          />
        </div>
      ) : loadingState ? (
        <SkeletonLoader name={"card"} count={5} />
      ) : (
        <p>No Data found</p>
      )}
    </div>
  );
}

export default FilterSection;
