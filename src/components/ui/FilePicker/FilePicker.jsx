import React, { useState } from 'react';
import styles from './FilePicker.module.scss';

const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];

export const FilePicker = React.forwardRef((props, ref) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const selectedFile = e.target.files[0]; // Получение выбранного файла
    if (selectedFile) {
      // Проверка типа файла
      if (!allowedTypes.includes(selectedFile.type)) {
        setError('Поддерживаются только .png, .jpg, .pdf');
        setFile(null);
        return;
      }

      setFile(selectedFile);
      setError(null); // Очистка ошибок, если всё корректно
    }
  };

  return (
    <label className={styles.picker}>
      <input
        type="file"
        accept=".png, .jpg, .pdf"
        className={styles.picker__file}
        onChange={onChange}
        ref={ref}
        {...props}
      />
      <div className={styles.picker__container}>
        <h3 className={styles.picker__text}>
          {file ? `Выбрано: ${file.name}` : 'Прикрепить скриншот'}
        </h3>
        <p className={styles.picker__accepts}>.png / .jpg / .pdf</p>
        {error && <p className={styles.picker__error}>{error}</p>}
      </div>
    </label>
  );
});
