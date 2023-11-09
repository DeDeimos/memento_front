import { ModalChange } from "../../../features/modalChange/ui";
import styles from "./index.module.scss";
// import prof from "../../../assets/vanvik_gigachad.png";
import { useEffect, useState } from "react";
import { MomentsFeed } from "../../../features/momentsFeed/ui";
import { getUserById, getUserMoments, getUserFollowers, getUserFollowing } from "../../../entities/user/api";

const Profile = () => {
  const [modalActive, setModalActive] = useState(false);
  const [user, setUser] = useState(null);
  const [moments, setMoments] = useState(null);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const user_id = localStorage.getItem('user_id');

  useEffect(() => {
    getUserById(user_id).then((res) => setUser(res));
    getUserMoments(user_id).then((res) => setMoments(res));
    getUserFollowers(user_id).then((res) => setFollowers(res.length));
    getUserFollowing(user_id).then((res) => setFollowing(res.length));
  }, []);

  if (!user) return null;
  if(!moments)return null;
  console.log(user);
  console.log(moments);

  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <div className={styles.headBody}>
          <div className={styles.photo}>
            <img src={user.profilephoto} />
            {/* <img src={prof} /> */}
          </div>
          <div className={styles.main}>
            <p>{user.name}</p>
            {/* <p>Vanvik</p> */}
            <button onClick={() => setModalActive(true)}>Изменить</button>
            <ModalChange active={modalActive} setActive={setModalActive} />
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>Все снова перепутали</p>
        <p>Что-то</p>
      </div>
      <span />
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <div className={styles.statsItemTop}>{following}</div>
          <div className={styles.statsItemBottom}>Подписок</div>
        </div>
        <div className={styles.statsItem}>
          <div className={styles.statsItemTop}>{followers}</div>
          <div className={styles.statsItemBottom}>Подписчиков</div>
        </div>
        <div className={styles.statsItem}>
          <div className={styles.statsItemTop}>{moments.length}</div>
          <div className={styles.statsItemBottom}>Публикаций</div>
        </div>
      </div>
      <MomentsFeed moments={moments}/>
    </div>
  );
};

export { Profile };
