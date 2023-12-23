import styles from "./index.module.scss";
import { PhotoInput } from "../../../shared/ui";
import { useState } from "react";
import { addTag, createMoment } from "../../../entities/moment/api";
import FormData from "form-data";

const AddMoment = ({ active, setActive }) => {
  const user_id = localStorage.getItem("user_id");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [tags, setTags] = useState("");

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleChangeDescription = (e) => {
    const inputValue = e.target.value;
    setDescription(inputValue);
  };

  const handleChangeTags = (e) => {
    const inputValue = e.target.value;
    setTags(inputValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let momentId;
  
    createMoment({
      author: user_id,
      description: description,
      image: selectedFile,
    })
      .then((res) => {
        console.log(res);
        momentId = res.id;
  
        const tagsArray = tags.split('#');
  
        // Очистка массива от пустых строк
        const cleanTagsArray = Array.from(new Set(tagsArray.map(tag => tag.trim()))).filter(tag => tag !== '');
  
        // Создание тегов
        const tagPromises = cleanTagsArray.map(tag => {
          return addTag({
            moment: momentId,
            name: tag.trim(),
          });
        });
  
        // Ожидание завершения всех запросов на создание тегов
        return Promise.all(tagPromises);
      })
      .then((tagResponses) => {
        console.log(tagResponses);
        setActive(false);
      })
      .catch((error) => {
        console.error("Ошибка при создании момента или тегов:", error);
        // Обработка ошибки, например, вывод уведомления пользователю
      });
  };
  
  if (!active) return null;
  else
    return (
      <div className={styles.moment} onClick={() => setActive(false)}>
        <div className={styles.momentBody} onClick={(e) => e.stopPropagation()}>
          <div className={styles.photoInput}>
            <PhotoInput onFileSelect={handleFileSelect} />
          </div>
          <div className={styles.textInput}>
            <div className={styles.textInputLabel}>
              <textarea
                style={{ padding: "0" }}
                placeholder="Введите описание..."
                onChange={handleChangeDescription}
              />
            </div>
            <div className={styles.textInputTags}>
              <textarea
                style={{ padding: "0" }}
                placeholder="Введите тэги..."
                onChange={handleChangeTags}
              />
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
