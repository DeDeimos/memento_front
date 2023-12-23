import { getUserById, updatePassword } from "../../../entities/user/api";
import styles from "./index.module.scss";
import { useState } from "react";

const ModalPassword = ({ active, setActive }) => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [notifacation, setNotifacation] = useState("");
  const user_id = localStorage.getItem("user_id");

  const handleChange = () => {
    if (password !== password2) {
      setError("Пароли должны совпадать");
      setNotifacation("");
      return;
    }

    getUserById(user_id)
      .then((user) => {
        console.log(user);

        return updatePassword(user_id, password);
      })
      .then(() => {
        setNotifacation("Пароль успешно изменен");
        setPassword("");
        setPassword2("");
        setError("");
      })
      .catch((error) => {
        console.error("Ошибка при обновлении пользователя:", error);
        // Обработка ошибки, например, вывод уведомления пользователю
      });
  };

  const hasndlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const hasndlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  if (!active.pass) return null;
  else
    return (
      <div
        className={styles.modal}
        onClick={() => setActive({ ...active, pass: false })}
      >
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalItem}>Поменять пароль</div>
          <input
            className={styles.modalinput}
            type="text"
            placeholder="Новый пароль"
            onChange={hasndlePasswordChange}
          />
          <div className={styles.modalItem}>Подтвердите новый пароль</div>
          <input
            className={styles.modalinput}
            type="text"
            placeholder="Новый пароль"
            onChange={hasndlePassword2Change}
          />
          <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          <p style={{ color: "green", marginBottom: "10px" }}>{notifacation}</p>
          <button type="submit" onClick={handleChange}>
            Сохранить
          </button>
          <div
            className={styles.modalItem}
            onClick={() => setActive({ ...active, pass: false })}
          >
            Закрыть
          </div>
        </div>
      </div>
    );
};

export { ModalPassword };
