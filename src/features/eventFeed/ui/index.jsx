import styles from "./index.module.scss";
import Photo from "../../../assets/vanik.jpg";
import { Centrifuge } from "centrifuge";


// const channel = Centrifuge.subscribe('like_channel_123'); // �������� 123 �� ������������� ������������
// channel.on('publish', (message) => {
//   // ��������� ����������� �����������.
//   console.log(message);
// });

const EventFeed = ({ active, setAcive }) => {
  if (!active) return null;
  else
    return (
      <div className={styles.feed} onClick={() => setAcive(false)}>
        <div className={styles.feedBody} onClick={(e) => e.stopPropagation()}>
          <div className={styles.feedItem}>
            <div className={styles.itemProfile}>
              <img src={Photo} />
              <div className={styles.itemInfo}>
                Поставил отметку "Нравится" вашему фото
              </div>
            </div>
            <div className={styles.post}>
              <img src={Photo} />
            </div>
          </div>
          <div className={styles.feedItem}>
            <div className={styles.itemProfile}>
              <img src={Photo} />
              <div className={styles.itemInfo}>
                Поставил отметку "Нравится" вашему фото
              </div>
            </div>
            <div className={styles.post}>
              <img src={Photo} />
            </div>
          </div>
          <div className={styles.feedItem}>
            <div className={styles.itemProfile}>
              <img src={Photo} />
              <div className={styles.itemInfo}>
                Поставил отметку "Нравится" вашему фото
              </div>
            </div>
            <div className={styles.post}>
              <img src={Photo} />
            </div>
          </div>
        </div>
      </div>
    );
};

export { EventFeed };

// import React, { useState, useEffect } from "react";
// import { Centrifuge } from "centrifuge";
// import styles from "./index.module.scss";
// import Photo from "../../../assets/vanik.jpg";

// const EventFeed = ({ active, setAcive }) => {

//   const user_id = localStorage.getItem('user_id');
//   const [notifications, setNotifications] = useState([]);
//   const centrifuge = new Centrifuge("ws://185.204.2.233:8111/connection/websocket",
//     {
//       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzA0MjkzODUzLCJpYXQiOjE3MDM2ODkwNTN9.l-HFvipLPNWLg7RAX7BGow5pz_0_ZUtZaMgiekzO5_w"
//     }
//   );
//   centrifuge.on('connected', function (ctx) {
//     console.log('connected', ctx);
//   });
//   const sub = centrifuge.newSubscription('like_channel_1', () => {
//     console.log('subscribed to channel like_channel_1');
//   });

//   sub.on('publication', function (ctx) {
//     // handle new Publication data coming from channel "news".
//     console.log(ctx.data);
//     setNotifications((prevNotifications) => [ctx.data, ...prevNotifications]);
//   });

//   sub.subscribe();

//   centrifuge.connect();

//   useEffect(() => {
//     console.log("user_id");
//     const centrifuge = new Centrifuge("ws://185.204.2.233:8111/connection/websocket",
//       {
//         token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzA0MjkzODUzLCJpYXQiOjE3MDM2ODkwNTN9.l-HFvipLPNWLg7RAX7BGow5pz_0_ZUtZaMgiekzO5_w"
//       }
//     );
//     const sub = centrifuge.newSubscription('like_channel_1', () => {
//       console.log('subscribed to channel like_channel_1');
//     });

//     sub.on('publication', function (ctx) {
//       // handle new Publication data coming from channel "news".
//       console.log(ctx.data);
//       setNotifications((prevNotifications) => [ctx.data, ...prevNotifications]);
//     });

//     sub.subscribe();

//     centrifuge.connect();

//   }, []);

//   if (!active) return null;
//   else
//     return (
//       <div className={styles.feed} onClick={() => setAcive(false)}>
//         <div className={styles.feedBody} onClick={(e) => e.stopPropagation()}>
//           <p>Notifications</p>
//           {notifications.map((notification, index) => (
//             <div key={index} className={styles.feedItem}>
//               <div className={styles.itemProfile}>
//                 <img src={Photo} alt="Profile" />
//                 <div className={styles.itemInfo}>{notification.message}</div>
//               </div>
//               <div className={styles.post}>
//                 <img src={Photo} alt="Post" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
// };

// export { EventFeed };
