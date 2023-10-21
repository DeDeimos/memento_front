import { ModalChange } from "../../../features/modalChange/ui";
import styles from "./index.module.scss";
import prof from "../../../assets/vanvik_gigachad.png";
import { useState } from "react";
import { MomentsFeed } from "../../../features/momentsFeed/ui";

const Profile = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <div className={styles.headBody}>
          <div className={styles.photo}>
            <img src={prof} />
          </div>
          <div className={styles.main}>
            <p>nickname</p>
            <button onClick={() => setModalActive(true)}>Изменить</button>
            <ModalChange active={modalActive} setActive={setModalActive} />
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <b>Пупкин Залупкин</b>
        <p>Все снова перепутали</p>
        <p>Что-то</p>
      </div>
      <span />
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <div className={styles.statsItemTop}>26</div>
          <div className={styles.statsItemBottom}>Подписок</div>
        </div>
        <div className={styles.statsItem}>
          <div className={styles.statsItemTop}>261</div>
          <div className={styles.statsItemBottom}>Подписок</div>
        </div>
        <div className={styles.statsItem}>
          <div className={styles.statsItemTop}>246</div>
          <div className={styles.statsItemBottom}>Подписок</div>
        </div>
      </div>
      <MomentsFeed/>
    </div>
  );
};

export { Profile };
