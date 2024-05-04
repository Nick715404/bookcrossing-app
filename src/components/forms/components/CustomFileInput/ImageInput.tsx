import React, { useCallback, useEffect, useState } from "react";
import { Button, Div, FormItem, Text } from "@vkontakte/vkui";
import { Icon24CancelOutline, Icon28CheckCircleOutline } from "@vkontakte/icons";
import { imageInputStyles, imageInputStylesWithGallery } from "../../../../constants/utils";
import { handleImageUpload } from "../../../../api/server/images/image";
import { showSnackbarFX } from "../../../../store/states";

type Props = {
  go: any;
  bookId: string;
};

export default function ImageInput({ go, bookId }: Props) {
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [urls, setUrls] = useState<any[]>([]);
  const maxFileSizeInBytes = 1024 * 1024; // 1 MB

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; // Получаем файлы из input
    if (files && files.length > 0) { // Проверяем, что files существует и не пустой
      const file = files[0];
      if (file.size > maxFileSizeInBytes) {
        setFileError(`Размер файла '${file.name}' превышает допустимый предел 1 MB.`);
      } else {
        setSelectedImage([file]);
        setFileError(null);
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

    // setSelectedImages((prev) => {
    //   const newImages = [...prev];
    //   newImages.splice(index, 1);
    //   return newImages;
    // });
  }

  useEffect(() => {
    if (go && selectedImage.length > 0 && !fileError) {
      console.log("Sending image to server", selectedImage);
      handleImageUpload(selectedImage, bookId)
        .catch(error => {
          console.error("Failed to upload image:", error);
          setFileError("Ошибка загрузки изображения");
        });
    }
  }, [go, selectedImage, fileError]);

  useEffect(() => {
    if (fileError) {
      console.log("Error occurred:", fileError);
      showSnackbarFX({
        text: `${fileError}`,
        icon: <Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />,
        duration: 4000,
      });
    }
  }, [fileError]);

  return (
    <FormItem>
      <Text weight="3" style={{ textAlign: "left", fontSize: "14px", marginTop: '20px', color: '#6D7885'}}>
        Фото
      </Text>
      <Text weight="1" style={{textAlign: 'center', fontSize: '18px'}}>{fileError}</Text>
      <input
        className="file-input"
        type="file"
        onChange={handleImageChange}
        style={selectedImage.length > 0 ? imageInputStylesWithGallery : imageInputStyles}
      />
      {selectedImage.length > 0 && (
        <Div style={{ display: "flex", flexWrap: "wrap" }}>
          <Div style={{ position: "relative", margin: "5px", cursor: "pointer", display: 'flex', alignItems: 'center'}}>
            <img
              src={URL.createObjectURL(selectedImage[0])}
              alt="Selected Image"
              style={imageInputStyles}
            />
            <Button
              style={{
                position: "absolute",
                top: "5px",
                right: "165px",
                width: '50px'
              }}
              onClick={() => setSelectedImage([])}
            >
              <Icon24CancelOutline />
            </Button>
          </Div>
        </Div>
      )}
      <Text weight="3" style={{ textAlign: "left", fontSize: "14px", marginTop: '12px', color: '#6D7885'}}>
        Допустимый размер файла 1Мб
      </Text>
    </FormItem>
  );
}
