import { imageInputStyles, imageInputStylesWithGallery, imageStyles } from "../../../../constants/utils";
import { getBookImage, handleImageUpload } from "../../../../api/server/images/image";
import { showSnackbarFX } from "../../../../store/states";

import { Icon24CancelOutline, Icon28CheckCircleOutline } from "@vkontakte/icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CellButton, Div, FormItem, Text } from "@vkontakte/vkui";

type Props = {
  go: any;
  bookId: string;
  edit?: boolean;
};

export default function ImageInput({ go, bookId, edit }: Props) {
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
  const [fileError, setFileError] = useState<boolean>(false);
  const [urls, setUrls] = useState<any[]>([]);
  const maxFileSizeInBytes = 1024 * 1024; // 1 MB
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; // Получаем файлы из input
    if (files && files.length > 0) { // Проверяем, что files существует и не пустой
      const file = files[0];
      if (file.size > maxFileSizeInBytes) {
        setFileError(true);
      } else {
        setSelectedImage([file]);
        setFileError(false);
      }
    }
  };

  const handleViewItems = useCallback(() => {
    if (selectedImage.length > 0) {
      selectedImage.forEach((item: File) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setUrls((prevUrls) => [...prevUrls, fileReader.result]);
        };
        fileReader.readAsDataURL(item);
      });
    }
  }, [selectedImage]);

  const handleRemoveImage = (index: number) => {
    setUrls((prev) => {
      const newUrls = [...prev];
      newUrls.splice(index, 1);
      return newUrls;
    });
    setSelectedImage([]); //очистка массива выбранных изображений

    // Сброс значения input
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  useEffect(() => {
    if (go && selectedImage.length > 0 && !fileError) {
      console.log("Sending image to server", selectedImage);
      handleImageUpload(selectedImage, bookId)
        .catch(error => {
          console.error("Failed to upload image:", error);
          setFileError(true);
        });
    }
  }, [go, selectedImage, fileError]);

  useEffect(() => {
    const Fetch = async () => {
      const images = await getBookImage(bookId);
      console.log(images);
    }
    Fetch() 
  }, []);

  return (
    <FormItem>
      <Text weight="3" style={{ textAlign: "left", fontSize: "14px", marginTop: '20px', color: '#6D7885' }}>
        Фото
      </Text>
      <input
        ref={inputRef}
        className="file-input"
        type="file"
        onChange={handleImageChange}
        style={selectedImage.length > 0 ? imageInputStylesWithGallery : imageInputStyles}
      />
      {selectedImage.length > 0 && (
        <Div style={{ display: "flex", flexWrap: "wrap" }}>
        <Div style={{ display: 'flex', position: "relative", margin: "5px", cursor: "pointer", alignItems: 'center', gap: '10px', marginRight: '-20px'}}>
          <img
            src={URL.createObjectURL(selectedImage[0])}
            alt="Selected Image"
            style={imageStyles}
          />
          <CellButton
            style={{
              width: 'auto',
              marginBottom: 'auto',
              marginTop: '-15px',
              marginRight: 'auto'
            }}
            onClick={() => {handleRemoveImage(0)}}
          >
            <Icon24CancelOutline />
          </CellButton>
        </Div>
      </Div>
    )}
    {
      !fileError &&
      <Text
          weight="3"
          style={{
            textAlign: "left",
            fontSize: "14px",
            marginTop: '12px',
          }}
        >
          Допустимый размер файла 1Мб
        </Text>
    }
      {
        fileError &&
        <Text weight="3"
          style={{
          textAlign: "left",
          fontSize: "14px",
          marginTop: '12px',
          color: 'rgb(219 105 105)'
        }}>
          Размер файла превышает допустимый предел в 1Мб
        </Text>
      }
    </FormItem>
  );
}
