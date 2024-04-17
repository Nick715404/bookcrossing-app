import { handleImageUpload } from "../../../../api/server/images/image";
import { imageInputStyles, imageInputStylesWithGallery } from "../../../../constants/utils";

import ImagesGallery from "../ImagesGallery/ImagesGallery";

import { useCallback, useEffect, useState } from "react";
import { FormItem } from "@vkontakte/vkui";

type Props = {
  go: any
  bookId: string
}

export default function ImageInput({ go, bookId }: Props) {

  const [images, setImages] = useState<any[]>([]);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [urls, setUrls] = useState<any[]>([]);

  const handleImageChange = (e: any) => {
    const files = e.target.files;
    setSelectedImages([...files]);
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
    handleViewItems();
  }, [selectedImages]);

  useEffect(() => {
    if (go) {
      handleImageUpload(selectedImages, bookId);
    }
  }, [go]);

  return (
    <FormItem>
      <ImagesGallery items={urls} />
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