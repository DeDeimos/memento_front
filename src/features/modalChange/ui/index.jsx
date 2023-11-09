import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";
const ModalChange = ({ active, setActive}) => {
  const history = useNavigate();
  const handleExit = (e) => {
    e.preventDefault();
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user_id");
    history("/auth");
  };

  if (!active.main) return null;
  else
    return (
      <div className={styles.modal} onClick={() => setActive({...active, main: false})}>
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
          <div 
          onClick={() => setActive({...active, main: false, pass: true})}
          className={styles.modalItem}
          >Поменять пароль</div>
          <div
            onClick={() => setActive({...active, main: false, data: true})}
            className={styles.modalItem}
          >
            Приватность и безопасность
          </div>
          {/* <ModalData active={privacy} setActive={setPrivacy} /> */}
          <div className={styles.modalItem} onClick={handleExit}>
            Выйти
          </div>
          <div className={styles.modalItem} onClick={() => setActive({...active, main: false})}>
            Закрыть
          </div>
        </div>
      </div>
    );
};

export { ModalChange };
