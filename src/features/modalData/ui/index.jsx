import styles from "./index.module.scss";
import { useState } from "react";
import {
  updateUser,
  getUserById,
  updateNameAndEmail,
} from "../../../entities/user/api";

const ModalData = ({ active, setActive }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [notifacation, setNotifacation] = useState("");
  const user_id = localStorage.getItem("user_id");
  const [email, setEmail] = useState("");

  const handleChange = () => {
    if (name === "" && email === "") {
      setError("Ничего не введено");
      setNotifacation("");
      return;
    }

    getUserById(user_id)
      .then((user) => {
        console.log(user);
        return updateNameAndEmail(user_id, name, email);
      })
      .then(() => {
        setNotifacation("Данные успешно изменены");
        setName("");
        setEmail("");
        setError("");
      })
      .catch((error) => {
        console.error("Ошибка при обновлении пользователя:", error);
        // Обработка ошибки, например, вывод уведомления пользователю
      // Проверка наличия свойства name в объекте ошибки
      if (error.response.data.error === "Name is not unique.") {
        setError("Пользователь с таким именем уже существует");
        setNotifacation("");
        return;
      }

      // Проверка наличия свойства email в объекте ошибки
      if (error.response.data.error === "Email is not unique.") {
        setError("Пользователь с таким email уже существует");
        setNotifacation("");
        return;
      }

      // Если ошибка не содержит информации о конкретном поле, обработайте ее по-своему усмотрению
      setError("Произошла ошибка при обновлении пользователя");
      setNotifacation("");
    });
  };

  const hasndleNameChange = (e) => {
    setName(e.target.value);
  };

  const hasndleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  if (!active.data) return null;
  else
    return (
      <div
        className={styles.modal}
        onClick={() => setActive({ ...active, data: false })}
      >
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalItem}>Поменять почту</div>
          <input
            className={styles.modalinput}
            type="text"
            placeholder="Новая почта"
            onChange={hasndleEmailChange}
          />
          <div className={styles.modalItem}>Поменять имя</div>
          <input
            className={styles.modalinput}
            type="text"
            placeholder="Новое имя"
            onChange={hasndleNameChange}
          />
          <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          <p style={{ color: "green", marginBottom: "10px" }}>{notifacation}</p>
          <button type="submit" onClick={handleChange}>
            Сохранить
          </button>
          <div
            className={styles.modalItem}
            onClick={() => setActive({ ...active, data: false })}
          >
            Закрыть
          </div>
        </div>
      </div>
    );
};

export { ModalData };
