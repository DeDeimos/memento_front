import React, { useState } from "react";
import styles from "./index.module.scss";

const PhotoInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const imageURL = URL.createObjectURL(file);
      setPreviewURL(imageURL);
    }
  };

  return (
    <div className={styles.photoinput}>
      {selectedFile && (
        <img
          src={previewURL}
          alt="Предварительный просмотр"
          style={{ maxWidth: "100%", maxHeight: "200px", height: "60%" }}
        />
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export { PhotoInput };
