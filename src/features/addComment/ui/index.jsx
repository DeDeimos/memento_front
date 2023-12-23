import { useState, useRef } from "react";
import styles from "./index.module.scss";
import { createComment } from "../../../entities/moment/api";

const AddComment = ({moment_id, addCommentFunction}) => {
  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const textareaRef = useRef(null);
  const user_id = localStorage.getItem('user_id');
  const author = localStorage.getItem('user_name');

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

  const handleSubmit = () => {
    createComment({
      author: user_id,
      moment: moment_id,
      text: text,
    })

    addCommentFunction(
      {
        author: {
          id: user_id,
          name: author,
        },
        created_at: new Date(),
        has_user_liked: false,
        text: text,
        });
    setText("");

  };

  return (
    <div className={styles.addComment}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        placeholder="Введите комментарий..."
      />
      {showButton && <button
        onClick={handleSubmit}
      >Опубликовать</button>}
    </div>
  );
};

export {AddComment};
