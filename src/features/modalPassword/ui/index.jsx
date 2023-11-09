import styles from "./index.module.scss";
import { useState } from "react";

const ModalPassword = ({ active, setActive }) => {
    if (!active.pass) return null;
    else
        return (
        <div className={styles.modal} onClick={() => setActive({...active, pass: false})}>
            <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalItem}>Поменять пароль</div>
            <input className={styles.modalinput} type="text" placeholder="Новый пароль" />
            <div className={styles.modalItem}>Подтвердите новый пароль</div>
            <input className={styles.modalinput} type="text" placeholder="Новый пароль" />
            <button type="submit">Сохранить</button>
            <div className={styles.modalItem} onClick={() => setActive({...active, pass: false})}>
                Закрыть
            </div>
            </div>
        </div>
        );
    }

export { ModalPassword };