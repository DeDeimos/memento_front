import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { ModalData } from "../../modalData/ui";
import { useState } from "react";
const ModalChange = ({ active, setActive }) => {

  const [privacy, setPrivacy] = useState(false);

  if (!active) return null;
  else
    return (
      <div className={styles.modal} onClick={() => setActive(false)}>
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalItem}>Поменять пароль</div>
          <div 
          // onClick={() => {setPrivacy(true); setActive(false)}}
          className={styles.modalItem}>Приватность и безопасность</div>
          {/* <ModalData active={privacy} setActive={setPrivacy} /> */}
          <Link to="/auth">
            <div className={styles.modalItem}>Выйти</div>
          </Link>
          <div className={styles.modalItem} onClick={() => setActive(false)}>
            Закрыть
          </div>
        </div>
      </div>
    );
};

export { ModalChange };
