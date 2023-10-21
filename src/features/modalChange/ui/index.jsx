import styles from "./index.module.scss";

const ModalChange = ({active, setActive}) => {
    if(!active) return null;
    else return (
    <div 
    className={styles.modal}
    onClick={() => setActive(false)}
    >
      <div 
        className={styles.modalBody}
        onClick={e => e.stopPropagation()}
        >
        <div className={styles.modalItem}>Поменять пароль</div>
        <div className={styles.modalItem}>Поменять пароль</div>
        <div className={styles.modalItem}>Поменять пароль</div>
        <div className={styles.modalItem}>Поменять пароль</div>
        <div className={styles.modalItem}>Поменять пароль</div>
        <div className={styles.modalItem}>Поменять пароль</div>
      </div>
    </div>
  );
};

export {ModalChange}
