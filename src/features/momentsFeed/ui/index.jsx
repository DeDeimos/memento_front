import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const MomentsFeed = ({moments}) => {
  return (
      <div className={styles.feed}>
            {!moments && <p>Нет публикаций</p>}
            {moments && moments.map((moment) => {
              return (
                <div key={moment.id} className={styles.feedItem}>
                  <Link to={`/moment/${moment.id}`}>
                  <img src={moment.image}/>
                  </Link>
                </div>
              )
            })}

      </div>
  );
};

export { MomentsFeed };