import styles from "./index.module.scss";
import { PhotoInput } from "../../../shared/ui";
import { useState } from "react";
import { createMoment } from "../../../entities/moment/api";

const AddMoment = ({ active, setActive }) => {
  const user_id = localStorage.getItem("user_id");
  const [moment, setMoment] = useState({
    author: user_id,
    description: "",
    image: "",
  });

  const handleChangeDescription = (e) => {
    setMoment({ ...moment, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMoment(moment).then((res) => {
      console.log(res);
      setActive(false);
    });
  };

  if (!active) return null;
  else
    return (
      <div className={styles.moment} onClick={() => setActive(false)}>
        <div className={styles.momentBody} onClick={(e) => e.stopPropagation()}>
          <div className={styles.photoInput}>
            <PhotoInput />
          </div>
          <div className={styles.textInput}>
            <div className={styles.textInputLabel}>
              <textarea placeholder="Введите описание..." />
            </div>
            <div className={styles.textInputTags}>
              <textarea placeholder="Введите тэги..." />
            </div>
            <div className={styles.textInputButton}>
              <button onClick={handleSubmit}>Опубликовать</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export { AddMoment };
