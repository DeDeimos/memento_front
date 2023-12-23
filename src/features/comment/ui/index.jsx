import styles from "./index.module.scss";
import Like from "../../../assets/like.svg";
import { useState, useEffect, useCallback } from "react";
import UnLike from "../../../assets/unlike.svg";
import { likeComment, deleteLike } from "../../../entities/moment/api";

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

const Comment = ({key, comment}) => {
    console.log(comment);
    const [like, setLike] = useState(comment.has_user_liked);
    const user_id = localStorage.getItem('user_id');
    const changeLike = () => {
        setLike(!like);
        if(like){
            deleteLike((user_id), false, comment.id);
        } else {
            likeComment(user_id, comment.id);
        }
    };
  return (
    <div className={styles.comment}>
        <div className={styles.commentAuthor}>
            <div className={styles.commentAuthorName}>{comment.author.name}</div>
            <div className={styles.commentLike}> <img src={like ? Like : UnLike} onClick={changeLike} /> </div>
        </div>
        <div className={styles.commentText}>{comment.text}</div>
        <div className={styles.commentDate}>{timeAgoFromNow(comment.created_at)}</div>
    </div>
  );
};

export { Comment };
