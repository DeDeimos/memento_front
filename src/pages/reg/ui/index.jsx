import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Reg = () => {
  return (
    <div className={styles.reg}>
      <div className={styles.regBody}>
        <div className={styles.regInputs}>
          <input type="text" placeholder="Моб. телефон или почта" />
          <input type="text" placeholder="Имя и фамилия" />
          <input type="text" placeholder="Имя пользователя" />
          <input type="text" placeholder="Пароль" />
          <Link to="/">
            <button type="submit">Регистрация</button>
          </Link>
          <p>
            Регистрируясь, вы принимаете наши{" "}
            <b>
              Условия, Политику использования данных и Политику в отношении
              файлов cookie.
            </b>
          </p>
        </div>
        <div className={styles.regChange}>
          <p>
            Есть аккаунт? <Link to="/auth">Вход</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Reg };
