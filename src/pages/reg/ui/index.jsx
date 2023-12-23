import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";
import { createUser } from "../../../entities/user/api";
//localstorage for user


const Reg = () => {

  const history = useNavigate();
  const user_id = localStorage.getItem('user_id');
  const isAuth = localStorage.getItem('isAuth');
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(user);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // registration date in user
    console.log(user);
    if(user.name === '' || user.email === '' || user.password === '') {
      setError('Заполните все поля');
      return;
    }
    console.log(user);
    createUser(user).then((res) => {
      
      console.log("res")
      console.log(res);

      if(res === 'error') {
        setError('Пользователь с таким именем уже существует');
        return;
      }
      localStorage.setItem('user_id', res.id);
      localStorage.setItem('isAuth', true);
      localStorage.setItem('user_name', res.name);
      history("/feed");
    });
  }  

  return (
    <div className={styles.reg}>
      <div className={styles.regBody}>
        <div className={styles.regInputs}>
          {/* <h1>Регистрация</h1> */}
          <p style={{color: 'red', marginBottom: "10px"}}>{error}</p>
         <p style={{textAlign: "left"}}>Место для вставки аватарки</p>
          <input type="file"/>
          <input name="email" type="text" placeholder="почта" onChange={handleChange} />
          {/* <input  type="text" placeholder="Имя и фамилия" /> */}
          <input type="text" name="name" placeholder="Имя пользователя" onChange={handleChange} />
          <input name="password" type="text" placeholder="Пароль" onChange={handleChange} />
          {/* <Link to="/"> */}
            <button type="submit" onClick={handleSubmit}>Регистрация</button>
          {/* </Link> */}
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
