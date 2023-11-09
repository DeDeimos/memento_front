import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";
const ModalChange = ({ active, setActive, setAnother }) => {
  const history = useNavigate();
  const handleExit = (e) => {
    e.preventDefault();
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user_id");
    history("/auth");
  };

  if (!active) return null;
  else
    return (
      <div className={styles.modal} onClick={() => setActive(false)}>
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
          <div 
          onClick={() => {setAnother("password"); setActive(false)}}
          className={styles.modalItem}
          >Поменять пароль</div>
          <div
            onClick={() => {setAnother("data"); setActive(false)}}
            className={styles.modalItem}
          >
            Приватность и безопасность
          </div>
          {/* <ModalData active={privacy} setActive={setPrivacy} /> */}
          <div className={styles.modalItem} onClick={handleExit}>
            Выйти
          </div>
          <div className={styles.modalItem} onClick={() => setActive(false)}>
            Закрыть
          </div>
        </div>
      </div>
    );
};

export { ModalChange };
