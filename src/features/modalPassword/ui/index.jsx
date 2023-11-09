import styles from "./index.module.scss";
import { useState } from "react";

const ModalPassword = ({ active, setActive }) => {
    if (!active) return null;
    else
        return (
        <div className={styles.modal} onClick={() => setActive(false)}>
            <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalItem}>Поменять почту</div>
            <input type="text" placeholder="Новая почта" />
            <div className={styles.modalItem}>Поменять имя</div>
            <input type="text" placeholder="Новое имя" />
            <button type="submit">Сохранить</button>
            <div className={styles.modalItem} onClick={() => setActive(false)}>
                Закрыть
            </div>
            </div>
        </div>
        );
    }

export { ModalPassword };