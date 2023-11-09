import styles from "./index.module.scss";

const MomentsFeed = ({moments}) => {
  return (
      <div className={styles.feed}>
            {!moments && <p>Нет публикаций</p>}
            {moments && moments.map((moment) => {
              return (
                <div key={moment.id} className={styles.feedItem}>
                  <img src={moment.image}/>
                </div>
              )
            })}

      </div>
  );
};

export { MomentsFeed };