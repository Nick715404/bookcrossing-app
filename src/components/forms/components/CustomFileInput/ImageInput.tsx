import { imageInputStyles, imageInputStylesActive, imageInputStylesWithGallery } from "../../../../constants/utils";
import { handleImageUpload } from "../../../../api/server/images/image";
import { useParams } from "@vkontakte/vk-mini-apps-router";

import { useFetchBookImg } from "../../../../hooks/useFetchBookImg";
import { CustomImage } from "./Image";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { FormItem, Text } from "@vkontakte/vkui";

type Props = {
  go: any;
  bookId: string;
  edit?: boolean;
};

export default function ImageInput({ go, bookId, edit }: Props) {
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
  const [fetchedImage, setFetchedImages] = useState();
  const [fileError, setFileError] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const { data } = useFetchBookImg({ bookId: params?.id });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const maxFileSizeInBytes = 1024 * 1024;
      if (file.size > maxFileSizeInBytes) {
        setFileError(true);
      } else {
        setSelectedImage([file]);
        setFileError(false);
      }
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage([]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  useEffect(() => {
    if (go && selectedImage.length > 0 && !fileError) {
      handleImageUpload(selectedImage, bookId)
        .catch(() => setFileError(true));
    }
  }, [go, selectedImage, fileError]);

  useEffect(() => {
    setFetchedImages(data);
  }, [data]);

  return (
    <FormItem>
      <Text weight="3" style={{ ...textStyles }}>
        Фото
      </Text>
      {
        !fetchedImage &&
        <input
          ref={inputRef}
          className="file-input"
          type="file"
          accept=".jpg, .jpeg, .png, .svg"
          onChange={handleImageChange}
          style={selectedImage.length > 0 ?
            imageInputStylesWithGallery :
            imageInputStyles}
        />
      }
      <CustomImage
        callback={handleRemoveImage}
        images={selectedImage}
        serverImage={fetchedImage}
      />
      {
        fetchedImage &&
        <>
          <Text style={{ marginBottom: '10px', color: 'rgb(150, 154, 159)', fontSize: '14px' }}>
            Обновить фото
          </Text>
          <input
            ref={inputRef}
            className="file-input"
            type="file"
            accept=".jpg, .jpeg, .png, .svg"
            onChange={handleImageChange}
            style={imageInputStylesActive}
          />
        </>
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
          Максимальный размер файла — 1Мб, допустимые форматы: .jpg, .jpeg, .png
        </Text>
      }
    </FormItem>
  );
}

export const textStyles: CSSProperties = {
  textAlign: "left",
  fontSize: "14px",
  marginTop: '20px',
  color: '#6D7885'
}