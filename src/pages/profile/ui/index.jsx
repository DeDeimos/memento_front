import { ModalChange } from "../../../features/modalChange/ui";
import styles from "./index.module.scss";
import prof from "../../../assets/vanik.jpg";
import { useEffect, useState } from "react";
import { MomentsFeed } from "../../../features/momentsFeed/ui";
import {
  getUserById,
  getUserMoments,
  getUserFollowers,
  getUserFollowing,
  followUser,
  unfollowUser,
} from "../../../entities/user/api";
import { ModalData } from "../../../features/modalData/ui";
import { ModalPassword } from "../../../features/modalPassword/ui";
import { useParams } from "react-router-dom";

const Profile = ({ id }) => {
  // const [modalMainActive, setModalMainActive] = useState(false);
  // const [modalDataActive, setModalDataActive] = useState(false);
  // const [modalPasswordActive, setModalPasswordActive] = useState(false);
  // const [anotherModal, setAnotherModal] = useState("none");

  const { id: _id } = useParams();

  console.log(_id);

  const [modals, setModals] = useState({
    main: false,
    data: false,
    pass: false,
  });

  const [user, setUser] = useState(null);
  const [moments, setMoments] = useState(null);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [isFollow, setIsFollow] = useState(false);
  const currUser = localStorage.getItem("user_id");
  let user_id;
  if (!_id) {
    user_id = localStorage.getItem("user_id");
  } else {
    user_id = _id;
  }

  useEffect(() => {
    getUserById(user_id).then((res) => setUser(res));
    getUserMoments(user_id).then((res) => setMoments(res));
    getUserFollowers(user_id).then((res) => {
      res.forEach((item) => {
        if (item.follower == currUser) {
          setIsFollow(true);
        }
      });
      setFollowers(res.length);
    });
    getUserFollowing(user_id).then((res) => setFollowing(res.length));
  }, []);

  if (!user) return null;
  if (!moments) return null;
  console.log(user);
  console.log(moments);

  const handleFollow = () => {
    if (!isFollow) {
      setIsFollow(true);
      followUser(currUser, user_id);
    } else {
      setIsFollow(false);
      unfollowUser(currUser, user_id);
    }
  };

  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <div className={styles.headBody}>
          <div className={styles.photo}>
            {user.profilephoto ? (
              <img src={user.profilephoto} />
            ) : (
              <img src={prof} />
            )}
          </div>
          <div className={styles.main}>
            <p>{user.name}</p>
            {!_id || _id === currUser ? (
              <button onClick={() => setModals({ ...modals, main: true })}>
                Изменить
              </button>
            ) : (
              <button onClick={handleFollow}>
                {isFollow ? "Отписаться" : "Подписаться"}
              </button>
            )}

            <ModalChange active={modals} setActive={setModals} />
            <ModalPassword active={modals} setActive={setModals} />
            <ModalData active={modals} setActive={setModals} />
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
      <MomentsFeed moments={moments} />
    </div>
  );
};

export { Profile };
