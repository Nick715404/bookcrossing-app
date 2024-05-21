import { handleImageUpload, updateImage } from "../../../../api/server/images/image";
import { useParams } from "@vkontakte/vk-mini-apps-router";
import {
  imageInputStyles,
  imageInputStylesActive,
  imageInputStylesWithGallery
} from "../../../../constants/utils";
import { useFetchBookImg } from "../../../../hooks/useFetchBookImg";
import { CustomImage } from "./Image";
import { EditBookImage } from "./EditBookImage";
import React, {
  CSSProperties,
  useEffect,
  useRef,
  useState
} from "react";
import {
  Button,
  FormItem,
  Text
} from "@vkontakte/vkui";
import { useUpdateImage } from "../../../../hooks/forms/useUpdateImage";

type Props = {
  go?: any;
  bookId?: string;
  edit?: boolean;
};

export default function ImageInput({ go, bookId, edit }: Props) {
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
  const [fetchedImage, setFetchedImages] = useState(null);
  const [fileError, setFileError] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const { data } = useFetchBookImg({ bookId: params?.id });
  const { mutate: updateImage, isLoading, isSuccess } = useUpdateImage({
    selectedImages: selectedImage,
    bookId: params?.id,
    imageId: data && data.id
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const maxFileSizeInBytes = (1024 * 1024) * 5;
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

  const handleUpdateImage = async () => {
    updateImage();
  }

  useEffect(() => {
    if (go && !fileError) {
      handleImageUpload(selectedImage, bookId)
        .catch(() => setFileError(true));
    }
  }, [go, selectedImage, fileError]);

  useEffect(() => {
    setFetchedImages(data);
  }, [data]);

  if (fetchedImage) {
    return (
      <FormItem>
        <Text weight="3" style={textStyles}>
          Фото
        </Text>
        <EditBookImage
          images={selectedImage}
          callback={handleRemoveImage}
          serverImage={fetchedImage}
          isSuccess={isSuccess}
        />
        {
          selectedImage.length === 0 ?
            <Text style={{ marginBottom: '10px', color: 'rgb(150, 154, 159)', fontSize: '14px' }}>
              Обновить фото
            </Text> :
            null
        }
        <input
          ref={inputRef}
          className="file-input"
          type="file"
          accept=".jpg, .jpeg, .png, .svg, .heic, .webp"
          onChange={handleImageChange}
          style={selectedImage.length === 0 ? imageInputStylesActive : imageInputStylesWithGallery}
        />
        <Button
          disabled={isLoading}
          loading={isLoading}
          onClick={handleUpdateImage}
          style={{ marginTop: 30 }}
          size="l"
          stretched
        >
          Обновить фото
        </Button>
        {
          fileError &&
          <Text weight="3"
            style={{
              textAlign: "left",
              fontSize: "14px",
              marginTop: '12px',
              color: 'rgb(219 105 105)'
            }}>
            Максимальный размер файла — 5Мб
          </Text>
        }
      </FormItem>
    )
  }

  return (
    <FormItem>
      <Text weight="3" style={textStyles}>
        Фото
      </Text>
      {
        selectedImage.length > 0 &&
        <CustomImage
          callback={handleRemoveImage}
          images={selectedImage}
        />
      }
      {
        !fetchedImage &&
        <input
          ref={inputRef}
          className="file-input"
          type="file"
          accept=".jpg, .jpeg, .png, .svg"
          onChange={handleImageChange}
          style={selectedImage.length === 0 ? imageInputStyles : imageInputStylesWithGallery}
        />
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
          Максимальный размер файла — 5Мб
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