import { Post } from "../../../widgets/post/ui";
import styles from "./index.module.scss";
import { getUserFollowingMoments } from "../../../entities/user/api";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPopularMoments } from "../../../entities/moment/api";

const Feed = () => {
  const [moments, setMoments] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const user_id = localStorage.getItem("user_id");
  const [popularMoments, setPopularMoments] = useState([]);
  const fetchData = () => {
    getUserFollowingMoments(user_id, 4, offset)
      .then((res) => {
        setMoments((prevMoments) => [...prevMoments, ...res]);
        setOffset(offset + res.length);
        setHasMore(res.length > 0);
      })
      .catch((error) => {
        console.error("Ошибка при получении моментов:", error);
        // Обработка ошибок, например, вывод уведомления пользователю
      });
  };

  useEffect(() => {
    getPopularMoments().then((res) => {
      setPopularMoments(res);
      console.log(res)
      console.log(popularMoments)
    });
    fetchData();
  }, []);

  useEffect(() => {
    console.log(popularMoments);
  }, [popularMoments]); 

  if (moments.length === 0)
    return (
      <div className={styles.feed}>
        {popularMoments.map((moment) => {
          return <Post key={moment.id} moment={moment} />;
        }
        )}
      </div>
    );

  return (
    <div className={styles.feed}>
      <InfiniteScroll
        dataLength={moments.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {moments.length === 0 && <p>Нет публикаций</p>}
        {moments.map((moment) => {
          return <Post key={moment.id} moment={moment} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export { Feed };
