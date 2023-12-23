import Logo from "../../../assets/logo.svg";
import Like from "../../../assets/unlike.svg";
import Explore from "../../../assets/explore.svg";
import Profile from "../../../assets/profile.svg";
import MiniLogo from "../../../assets/logo-mini.svg";
import Add from "../../../assets/addmoment.svg"
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EventFeed } from "../../../features/eventFeed/ui";
import { AddMoment } from "../../../features/addMoment/ui";

const Header = () => {
  const [activeFeed, setActiveFeed] = useState(false);
  const [activeMoment, setAciveMoment] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to="/feed">
          <img className={styles.icon} src={Logo} onClick={() => setActiveFeed(false)} />
          <img className={styles.iconMini} src={MiniLogo} onClick={() => setActiveFeed(false)} />
        </Link>
      </div>
      {/* <div className={styles.headerInput}>
        <img src={Search} />
        <input className={styles.headerInput} placeholder="Поиск" />
      </div> */}
      <div className={styles.rightIcons}>
        <img src={Add} onClick={() => {setAciveMoment(!activeMoment); setActiveFeed(false)}} />
        <AddMoment active={activeMoment} setActive={setAciveMoment}/>
        <Link to="/explore">
          <img src={Explore} onClick={() => {setActiveFeed(false); setAciveMoment(false)}} />
        </Link>
        <img src={Like} onClick={() => {setActiveFeed(!activeFeed); setAciveMoment(false)}} />
        <EventFeed active={activeFeed} setAcive={setActiveFeed} />
        <Link to="/profile">
          <img src={Profile} onClick={() => {setActiveFeed(false); setAciveMoment(false)} } />
        </Link>
      </div>
    </div>
  );
};

export { Header };
