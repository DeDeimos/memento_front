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

        {!moments && <p>Нет публикаций</p>}
          {moments.map((moment) => {
            return (
              <Post key={moment.id} moment={moment}/>
            )
          })}
     </div>     
  );
};

export { Feed };
