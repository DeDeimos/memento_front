import Logo from "../../../assets/logo.svg";
import Like from "../../../assets/like.svg";
import Search from "../../../assets/search.svg";
import Explore from "../../../assets/explore.svg";
import Profile from "../../../assets/profile.svg";
import MiniLogo from "../../../assets/logo-mini.svg";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EventFeed } from "../../../features/eventFeed/ui";

const Header = () => {
  const [activeFeed, setActiveFeed] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to="/">
          <img className={styles.icon} src={Logo} />
          <img className={styles.iconMini} src={MiniLogo} />
        </Link>
      </div>
      <div className={styles.headerInput}>
        <img src={Search} />
        <input className={styles.headerInput} placeholder="Поиск" />
      </div>
      <div className={styles.rightIcons}>
        <Link to="/explore">
          <img src={Explore} />
        </Link>
        <img src={Like} onClick={() => setActiveFeed(!activeFeed)} />
        <EventFeed active={activeFeed} setAcive={setActiveFeed} />
        <Link to="/profile">
          <img src={Profile} />
        </Link>
      </div>
    </div>
  );
};

export { Header };
