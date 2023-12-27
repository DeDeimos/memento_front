import { getUserById, updateProfilephoto } from "../../../entities/user/api";
import styles from "./index.module.scss";
import { useState } from "react";

export const ModalPhoto = ({ active, setActive }) => {

    const [error, setError] = useState("");
    const [notifacation, setNotifacation] = useState("");
    const user_id = localStorage.getItem("user_id");
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const imageURL = URL.createObjectURL(file);
            setPreviewURL(imageURL);
            onFileSelect(file);
        }
    };

    const handleChange = () => {
        if (!previewURL || !selectedFile) {
            setError("Вставьте фотографию");
            setNotifacation("");
            return;
        }

        getUserById(user_id)
            .then((user) => {
                console.log(user);

                return updateProfilephoto(user_id, selectedFile);
            })
            .then(() => {
                setNotifacation("Профильная фотография успешно изменена");
                setPreviewURL("");
                setSelectedFile(null);
                setError("");
            })
            .catch((error) => {
                console.error("Ошибка при обновлении пользователя:", error);
                // Обработка ошибки, например, вывод уведомления пользователю
            });
    };

    if (!active.photo) return null;
    else
        return (
            <div
                className={styles.modal}
                onClick={() => setActive({ ...active, photo: false })}
            >
                <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.photoinput}>
                        {selectedFile && (
                            <img
                                src={previewURL}
                                alt="Предварительный просмотр"
                                style={{ maxWidth: "100%", maxHeight: "50px", height: "60%" }}
                            />
                        )}
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                    <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
                    <p style={{ color: "green", marginBottom: "10px" }}>{notifacation}</p>
                    <button type="submit" onClick={handleChange}>
                        Сохранить
                    </button>
                    <div
                        className={styles.modalItem}
                        onClick={() => setActive({ ...active, photo: false })}
                    >
                        Закрыть
                    </div>
                </div>
            </div>
        );
};