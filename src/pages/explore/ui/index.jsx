import styles from "./index.module.scss";
import photo from "../../../assets/vanik.jpg";
import Search from "../../../assets/search.svg";
import { useState } from "react";
import { search } from "../../../entities/moment/api";
import { Link } from "react-router-dom";

const Explore = () => {
  const [query, setQuery] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);
  const [searchMoments, setSearchMoments] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    search(query).then((res) => {
      setSearchUsers(res.users);
      setSearchMoments(res.moments);
    });
  };

  return (
    <div className={styles.content}>
      <div className={styles.exploreinput}>
        <div className={styles.headerInput}>
          <img src={Search} />
          <form onSubmit={handleSubmit}>
            <input
              className={styles.headerInput}
              placeholder="Поиск"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <div className={styles.explore}>
        <div className={styles.exploreUsers}>
          <div className={styles.exploreUsersHeader}>
            <h2>Пользователи</h2>
          </div>
          <div className={styles.exploreUsersContent}>
            {searchUsers.length == 0 && searchMoments.length == 0 && (
              <div className={styles.exploreUsersItem}>
                <div className={styles.exploreUsersItemInfo}>
                  <h3>Ничего не найдено</h3>
                </div>
              </div>
            )}
            {searchUsers.map((item) => (
              <Link to={`/profile/${item.id}`}>
                <div className={styles.exploreUsersItem}>
                  <div className={styles.exploreUsersItemPhoto}>
                    <img src={item.profilephoto} />
                  </div>
                  <div className={styles.exploreUsersItemInfo}>
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.exploreMoments}>
          <div className={styles.exploreMomentsHeader}>
            <h2>Моменты</h2>
          </div>
          <div className={styles.exploreMomentsContent}>
            {searchMoments.length == 0 && searchUsers.length == 0 && (
              <div className={styles.exploreMomentsItem}>
                <div className={styles.exploreMomentsItemInfo}>
                  <h3>Ничего не найдено</h3>
                </div>
              </div>
            )}
            {searchMoments.map((item) => (
              <div className={styles.exploreMomentsItem}>
                <Link to={`/moment/${item.id}`}>
                  <div className={styles.exploreMomentsItemPhoto}>
                    <img src={item.image} />
                  </div>
                  <div className={styles.exploreMomentsItemInfo}>
                    <p>{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Explore };
