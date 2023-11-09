import styles from "./index.module.scss";
import { useState } from "react";

const ModalData = ({ active, setActive }) => {
    if (!active.data) return null;
    else
        return (
        <div className={styles.modal} onClick={() => setActive({...active, data: false})}>
            <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalItem}>Поменять почту</div>
            <input className={styles.modalinput} type="text" placeholder="Новая почта" />
            <div className={styles.modalItem}>Поменять имя</div>
            <input className={styles.modalinput} type="text" placeholder="Новое имя" />
            <button type="submit">Сохранить</button>
            <div className={styles.modalItem} onClick={() => setActive({...active, data:false})}>
                Закрыть
            </div>
            </div>
        </div>
        );
    }

export { ModalData };