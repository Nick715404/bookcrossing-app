import { handleImageUpload } from "../../../../api/server/images/image";
import { imageInputStyles, imageInputStylesWithGallery } from "../../../../constants/utils";

import ImagesGallery from "../ImagesGallery/ImagesGallery";

import { useCallback, useEffect, useState } from "react";
import { FormItem } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import { $createBookStatus } from "../../../../store/books";

type Props = {
  go: any
  bookId: string
}

export default function ImageInput({ go, bookId }: Props) {
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
    if (go && selectedImages.length) {
      console.log('Start upload img');
      handleImageUpload(selectedImages, bookId);
    } else {
      console.log('Nothing to upload!');
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