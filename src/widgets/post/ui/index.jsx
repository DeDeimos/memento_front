import More from "../../../assets/more.svg";
import Like from "../../../assets/like.svg";
import Message from "../../../assets/message.svg";
import Ivan from "../../../assets/vanik.jpg";
import styles from "./index.module.scss";
import { AddComment } from "../../../features/addComment/ui";

function timeAgoFromNow(createdAt) {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);
  const timeDifference = currentDate - createdDate;

  const secondsAgo = Math.floor(timeDifference / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo} секунд назад`;
  }

  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) {
    return `${minutesAgo} минут назад`;
  }

  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) {
    return `${hoursAgo} часов назад`;
  }

  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 30) {
    return `${daysAgo} дней назад`;
  }

  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) {
    return `${monthsAgo} месяцев назад`;
  }

  const yearsAgo = Math.floor(monthsAgo / 12);
  return `${yearsAgo} лет назад`;
}

const Post = ({ key, moment }) => {
  return (
    <div key={key} className={styles.post}>
      <div className={styles.postTop}>
        <div className={styles.postTopInfo}>
          <div className={styles.postAuthorLogo}>
            {moment.author_info.profilephoto ? (
              <img
                className={styles.postAuthorLogo}
                src={moment.author_info.profilephoto}
              />
            ) : (
              <img
                className={styles.postAuthorLogo}
                src={Ivan}
              />
            )}
          </div>
          <div className={styles.postAuthorLabel}>
            <b>{moment.author_info.name}</b>
            <p>{timeAgoFromNow(moment.created_at)}</p>
          </div>
        </div>
        <div className={styles.postTopMore}>
          <img src={More} />
        </div>
      </div>

      <div className={styles.postContent}>
        <img src={moment.image} className={styles.contentPhoto} />
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
        <div className={styles.postBottomCommentsection}>
          {moment.description}
        </div>
        <AddComment />
      </div>
    </div>
  );
};

export { Post };
