import styles from "./index.module.scss";
import photo from "../../../assets/vanik.jpg";
import Search from "../../../assets/search.svg";
const Explore = () => {
  return (
    <div className={styles.content}>
      <div className={styles.exploreinput}>
        <div className={styles.headerInput}>
          <img src={Search} />
          <input className={styles.headerInput} placeholder="Поиск" />
        </div>
      </div>
      <div className={styles.explore}>
        <div className={styles.exploreItem}>
          <img src={photo} />
        </div>
        <div className={styles.exploreItem}>
          <img src={photo} />
        </div>
        <div className={styles.exploreItem}>
          <img src={photo} />
        </div>
        <div className={styles.exploreItem}>
          <img src={photo} />
        </div>
        <div className={styles.exploreItem}>
          <img src={photo} />
        </div>
        <div className={styles.exploreItem}>
          <img src={photo} />
        </div>
        <div className={styles.exploreItem}>
          <img src={photo} />
        </div>
        <div className={styles.exploreItem}>
          <img src={photo} />
        </div>
      </div>
    </div>
  );
};

export { Explore };
