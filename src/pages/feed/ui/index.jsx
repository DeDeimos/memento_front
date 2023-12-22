import { Post } from "../../../widgets/post/ui";
import styles from "./index.module.scss";
import { getUserFollowingMoments } from "../../../entities/user/api";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Feed = () => {
  const [moments, setMoments] = useState(null);
  const user_id = localStorage.getItem("user_id");
  useEffect(() => {
    getUserFollowingMoments(user_id).then((res) => setMoments(res));
  }, []);

  if (!moments) return null;

  return (
    <div className={styles.feed}>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {/* <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}

        {/* {!moments && <p>Нет публикаций</p>}
          {moments.map((moment) => {
            return (
              <Post key={moment.id} moment={moment}/>
            )
          })} */}
      </InfiniteScroll>
    </div>
  );
};

export { Feed };
