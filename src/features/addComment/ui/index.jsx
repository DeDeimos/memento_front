import { useState, useRef } from "react";
import styles from "./index.module.scss";

const AddComment = () => {
  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const textareaRef = useRef(null);

  const handleTextChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
    setShowButton(inputValue.length > 0);

    // Вычисляем высоту textarea на основе его содержимого
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <div className={styles.addComment}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        placeholder="Введите комментарий..."
      />
      {showButton && <button>Опубликовать</button>}
    </div>
  );
};

export {AddComment};
