import { Post } from "../../../widgets/post/ui";
import styles from "./index.module.scss";

const Feed = () => {
  return (
      <div className={styles.feed}>
        {/* <div className={styles.feedBody}> */}
          <Post />
          <Post />
          <Post />
          <Post />
        {/* </div> */}
      </div>
    // <div className={styles.feed}>
    //     <Post/>
    //     <Post/>
    //     <Post/>
    //     <Post/>
    // </div>
  );
};

export { Feed };
