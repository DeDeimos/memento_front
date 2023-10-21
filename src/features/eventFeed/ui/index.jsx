import styles from "./index.module.scss";
import Photo from "../../../assets/vanik.jpg";

const EventFeed = ({ active, setAcive }) => {
  if (!active) return null;
  else
    return (
      <div className={styles.feed} onClick={() => setAcive(false)}>
        <div className={styles.feedBody} onClick={(e) => e.stopPropagation()}>
          <div className={styles.feedItem}>
            <div className={styles.itemProfile}>
              <img src={Photo} />
              <div className={styles.itemInfo}>
                Поставил отметку "Нравится" вашему фото
              </div>
            </div>
            <div className={styles.post}>
              <img src={Photo} />
            </div>
          </div>
          <div className={styles.feedItem}>
            <div className={styles.itemProfile}>
              <img src={Photo} />
              <div className={styles.itemInfo}>
                Поставил отметку "Нравится" вашему фото
              </div>
            </div>
            <div className={styles.post}>
              <img src={Photo} />
            </div>
          </div>
          <div className={styles.feedItem}>
            <div className={styles.itemProfile}>
              <img src={Photo} />
              <div className={styles.itemInfo}>
                Поставил отметку "Нравится" вашему фото
              </div>
            </div>
            <div className={styles.post}>
              <img src={Photo} />
            </div>
          </div>
        </div>
      </div>
    );
};

export { EventFeed };
