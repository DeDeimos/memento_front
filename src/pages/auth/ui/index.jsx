import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";
import { loginUser } from "../../../entities/user/api";
// import { } from "../../../entities/user/api";

const Auth = () => {

  const history = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === '') {
      setError('Введите логин');
      return;
    }
    if (user.password === '') {
      setError('Введите пароль');
      return;
    } 
    loginUser(user).then((res) => {
      console.log("res")
      console.log(res);

      if(res === 'error') {
        setError('Неправильные учетные данные');
        return;
      }
      localStorage.setItem('user_id', res.id);
      localStorage.setItem('isAuth', true);
      history("/feed");
    });
    // if (login !== '' && password !== '') {
    //   dispatch(loginUser(login, password));
    // }
  };

  return (
    <div className={styles.auth}>
      <div className={styles.authBody}>
        <div className={styles.authInputs}>
          
          {error && <p className={styles.error}>{error}</p>}
          <input type="text" name='email' placeholder="Почта пользователя" onChange={handleChange} />
          <input type="password" name='password' placeholder="Пароль" onChange={handleChange} />
          
            <button 
              type="submit"
              onClick={handleSubmit}
              >Войти</button>
          
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
