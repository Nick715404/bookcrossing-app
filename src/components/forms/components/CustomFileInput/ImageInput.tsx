import ImagesGallery from "../ImagesGallery/ImagesGallery";
import { handleImageUpload } from "../../../../api/server/images/image";
import { imageInputStyles, imageInputStylesWithGallery } from "../../../../constants/utils";
import { useCallback, useEffect, useState } from "react";
import { Button, Div, FormItem, Text } from "@vkontakte/vkui";
import { showSnackbarFX } from "../../../../store/states";
import { Icon28CheckCircleOutline } from "@vkontakte/icons";

type Props = {
  go: any
  bookId: string
}

export default function ImageInput({ go, bookId }: Props) {
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [urls, setUrls] = useState<any[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const maxFileSizeInBytes = 1024 * 1024; // - 1 MB

  const handleImageChange = (e: any) => {
    const files = e.target.files;
    const filesArray = Array.from(files) as Array<File>;

    setFileError(null);

    const filteredFiles = filesArray.filter((file: File) => {
      if (file.size > maxFileSizeInBytes) {
        setFileError(`Размер файла '${file.name}' превышает допустимый предел 1 MB.`);
        return false;
      }
      return true;
    });

    setSelectedImages((prev) => [...prev, ...filteredFiles]);
  };

  const handleViewItems = useCallback(() => {
    selectedImages.forEach((item: any) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setUrls([...urls, fileReader.result])
      }
      fileReader.readAsDataURL(item);
    });
  }, [selectedImages]);

  const handleRemoveImage = (index: number) => {
    setUrls((prev) => {
      const newUrls = [...prev];
      newUrls.splice(index, 1);
      return newUrls;
    });

    setSelectedImages((prev) => {
      const newImages = [...prev];
      newImages.splice(index, 1);
      return newImages;
    });
  }

  console.log(urls, selectedImages);

  useEffect(() => {
    if (!fileError) {
      handleViewItems();
    }
  }, [selectedImages, fileError]);

  useEffect(() => {
    if (go && selectedImages.length && !fileError) {
      handleImageUpload(selectedImages, bookId);
    }
  }, [go]);

  useEffect(() => {
    if (fileError) {
      console.log('error');
    }
  }, [fileError]);

  return (
    <FormItem>
      {
        fileError && selectedImages.length === 0 &&
        <Div style={{ border: '#858585b6 solid 2px', borderRadius: '10px', marginBottom: '30px' }}>
          <Text weight="3" style={{ textAlign: 'center', fontSize: '18px', }}>{fileError}</Text>
        </Div>
      }
      {
        urls.map((index) => (
          <Div key={index} style={{ position: "relative", margin: "5px", cursor: "pointer" }}>
            <ImagesGallery items={urls} />
            <Button style={{ position: "absolute", top: "5px", right: "5px" }} onClick={() => handleRemoveImage(index)}>
              Удалить
            </Button>
          </Div>
        ))
      }
      <input
        className="file-input"
        type="file"
        multiple
        onChange={handleImageChange}
        style={selectedImages.length > 0 ? { ...imageInputStylesWithGallery } : imageInputStyles}
      />
    </FormItem>
  )
}