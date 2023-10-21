import More from "../../../assets/more.svg";
import Like from "../../../assets/like.svg";
import Message from "../../../assets/message.svg";
import Ivan from "../../../assets/vanik.jpg";
import styles from "./index.module.scss";
import { AddComment } from "../../../features/addComment/ui";

const Post = () => {

  return (
    <div className={styles.post}>
      <div className={styles.postTop}>
        <div className={styles.postTopInfo}>
          <div className={styles.postAuthorLogo}>
            <img cpost-author src={Ivan} />
          </div>
          <div className={styles.postAuthorLabel}>
            <b>The Rock</b>
            <p>5 дней</p>
          </div>
        </div>
        <div className={styles.postTopMore}>
          <img src={More} />
        </div>
      </div>

      <div className={styles.postContent}>
        <img src={Ivan} className={styles.contentPhoto}/>
      </div>

      <div className={styles.postBottom}>
        <div className={styles.postBottomActions}>
          <div className={styles.actionsLeft}>
            <img src={Like} />
            <img src={Message} />
          </div>
          <div className={styles.actionsRight}></div>
        </div>

        <div className={styles.postBottomLikes}>6,357 отметок "Нравится"</div>
        <div className={styles.postBottomCommentsection}></div>
        <AddComment/>
      </div>
    </div>
  );
};

export { Post };
