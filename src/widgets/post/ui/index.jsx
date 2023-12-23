import More from "../../../assets/more.svg";
import Like from "../../../assets/like.svg";
import UnLike from "../../../assets/unlike.svg";
import Message from "../../../assets/message.svg";
import Ivan from "../../../assets/vanik.jpg";
import styles from "./index.module.scss";
import { AddComment } from "../../../features/addComment/ui";
import { useState, useEffect, useCallback } from "react";
import { deleteLike, getStatisticMoment, likeMoment } from "../../../entities/moment/api";
import { Comment } from "../../../features/comment/ui";

function timeAgoFromNow(createdAt) {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);
  const timeDifference = currentDate - createdDate;

  const secondsAgo = Math.floor(timeDifference / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo} СЃРµРєСѓРЅРґ РЅР°Р·Р°Рґ`;
  }

  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) {
    return `${minutesAgo} РјРёРЅСѓС‚ РЅР°Р·Р°Рґ`;
  }

  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) {
    return `${hoursAgo} С‡Р°СЃРѕРІ РЅР°Р·Р°Рґ`;
  }

  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 30) {
    return `${daysAgo} РґРЅРµР№ РЅР°Р·Р°Рґ`;
  }

  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) {
    return `${monthsAgo} РјРµСЃСЏС†РµРІ РЅР°Р·Р°Рґ`;
  }

  const yearsAgo = Math.floor(monthsAgo / 12);
  return `${yearsAgo} Р»РµС‚ РЅР°Р·Р°Рґ`;
}

const Post = ({ key, moment }) => {
  const [like, setLike] = useState(false);

  const [likes, setLikes] = useState(0);
  // const [recentComments, setResentComments] = useState([]);
  const [recentComments, setResentComments] = useState([]);
  // take from local storage
  const user_id = localStorage.getItem('user_id');

  useEffect(() => {
    console.log(moment);
    getStatisticMoment(moment.id, user_id).then((res) => {
      console.log(res.data);
      console.log(res.data.like_count);
      console.log(res.data.recent_comments);
      setLikes((prevStat) => res.data.like_count);
      setResentComments((prevComments) => {
        // Используйте предыдущее состояние для гарантии актуальности данных
        return [...prevComments, ...res.data.recent_comments];
      });
      setLike(moment.has_like);
      console.log(likes);
      console.log("Like:");
      console.log(like);
      console.log("Recent comments:");
      console.log(recentComments);
    });
  }, []);

  useEffect(() => {
    console.log(likes);
  }, [like, likes]);
  // const user_id = localStorage.getItem('user_id');

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

  const addCommentFunction = (newComment) => {
    // Обновляем массив комментариев
    setResentComments([newComment, ...recentComments]);
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

        <div className={styles.postBottomLikes}>{likes} РѕС‚РјРµС‚РѕРє "РќСЂР°РІРёС‚СЃСЏ"</div>
        <div className={styles.postBottomCommentsection}>
          {moment.description}
        </div>
        <div className={styles.comments}>
              {recentComments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
        </div>
        <AddComment moment_id={moment.id} addCommentFunction={addCommentFunction}/>
      </div>
    </div>
  );
};


export { Post };
