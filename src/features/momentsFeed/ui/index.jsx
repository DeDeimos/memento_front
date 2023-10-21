import styles from "./index.module.scss";
import photo from "../../../assets/vanik.jpg"

const MomentsFeed = () => {
  return (
      <div className={styles.feed}>
            <div className={styles.feedItem}>
                <img src={photo}/>
            </div>
            <div className={styles.feedItem}>
                <img src={photo}/>
            </div>
            <div className={styles.feedItem}>
                <img src={photo}/>
            </div>
            <div className={styles.feedItem}>
                <img src={photo}/>
            </div>
            <div className={styles.feedItem}>
                <img src={photo}/>
            </div>
            <div className={styles.feedItem}>
                <img src={photo}/>
            </div>
      </div>
  );
};

export { MomentsFeed };