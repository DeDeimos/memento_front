import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Auth = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.authBody}>
        <div className={styles.authInputs}>
          <input type="text" placeholder="Имя пользователя" />
          <input type="password" placeholder="Пароль" />
          <Link to="/">
            <button type="submit">Войти</button>
          </Link>
        </div>
        <div className={styles.authChange}>
          <p>
            Нет аккаунта? <Link to="/reg">Зарегистрируйтесь</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Auth };
