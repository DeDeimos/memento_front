import More from "../../../assets/more.svg";
import Like from "../../../assets/like.svg";
import UnLike from "../../../assets/unlike.svg";
import Message from "../../../assets/message.svg";
import Ivan from "../../../assets/vanik.jpg";
import styles from "./index.module.scss";
import { AddComment } from "../../../features/addComment/ui";
import { useState, useEffect, useCallback } from "react";
import { deleteLike, getStatisticMoment, likeMoment } from "../../../entities/moment/api";

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
  const [like, setLike] = useState(true);

  const [likes, setLikes] = useState(0);
  const [recentComments, setResentComments] = useState([]);

  useEffect(() => {
    console.log(moment);
    getStatisticMoment(moment.id).then((res) => {
      console.log(res.data);
      console.log(res.data.like_count);
      console.log(res.data.recent_comments);
      setLikes((prevStat) => res.data.like_count);
      setResentComments((prevStat) => res.data.recent_comments);
      setLike(moment.has_like);
      console.log(likes);
      console.log("Like:");
      console.log(like);
      console.log(recentComments);
    });
  }, []);

  useEffect(() => {
    console.log(likes);
  }, [like, likes]);
  const user_id = localStorage.getItem('user_id');

  const changeLike = (e) => {
    setLike((prevStat) => !prevStat);
    
    if(like){
      setLikes(likes - 1);
      deleteLike(user_id, moment.id, false);
    } else {
      setLikes(likes + 1);
      likeMoment(user_id, moment.id);
    } 
    
  };

  return (
    <div className={styles.post}>
      <div className={styles.postTop}>
        <div className={styles.postTopInfo}>
          <div className={styles.postAuthorLogo}>
            {moment.author_info.profilephoto ? (
              <img
                className={styles.postAuthorLogo}
                src={moment.author_info.profilephoto}
              />
            ) : (
              <img className={styles.postAuthorLogo} src={Ivan} />
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
            <img src={like ? Like : UnLike} onClick={changeLike} />
            <img src={Message} />
          </div>
          <div className={styles.actionsRight}></div>
        </div>

        <div className={styles.postBottomLikes}>{likes} отметок "Нравится"</div>
        <div className={styles.postBottomCommentsection}>
          {moment.description}
        </div>
        <div>
          
        </div>
        <AddComment />
      </div>
    </div>
  );
};


export { Post };
