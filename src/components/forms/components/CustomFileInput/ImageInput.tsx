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

    const filteredFiles = filesArray.filter((file: File) => {
      if (file.size > maxFileSizeInBytes) {
        setFileError(`Размер файла '${file.name}' превышает допустимый предел 1 MB.`);
        return false;
      }
      return true;
    });

    setSelectedImages([...filteredFiles]);
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
      showSnackbarFX({
        text: `${fileError}`,
        icon: <Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />,
        duration: 4000,
      });
    }
  }, [fileError]);

  const handleRemoveImage = (index: number) => {
    const updateUrls = [...urls];
    updateUrls.splice(index, 1);
    setUrls(updateUrls);
  }

  return (
    <FormItem>
      {/* <Div style={{display: 'flex', flexWrap: 'wrap'}}>
        {urls.map((item, index) => (
          <Div key={index} style={{ position: "relative", margin: "5px", cursor: "pointer" }}>
            <img src={item.url} />
            <Button  style={{position: "absolute", top: "5px", right: "5px"}} onClick={() => handleRemoveImage(index)}>
              Удалить
            </Button>
          </Div>
        ))}
      </Div> */}
      <Div style={{border: '#d5d5d7 solid 2px', borderRadius: '25px', marginBottom: '30px'}}>
        
      {urls.map((item, index) => (
          <Div key={index} style={{ position: "relative", margin: "5px", cursor: "pointer" }}>
            <ImagesGallery items={urls} />
            <Button  style={{position: "absolute", top: "5px", right: "5px"}} onClick={() => handleRemoveImage(index)}>
              Удалить
            </Button>
          </Div>
        ))}
        <Text weight="1" style={{textAlign: 'center', fontSize: '18px'}}>{fileError}</Text>
      </Div>
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