import { handleImageUpload } from "../../../../api/server/images/image";
import { getBookImage } from "../../../../api/server/images/image";
import { imageInputStyles } from "../../../../constants/utils";
import { FormItem } from "@vkontakte/vkui";
import { useEffect, useState } from "react";

type Props = {
  go: any
  bookId: string
}

export default function ImageInput({ go, bookId }: Props) {

  const [images, setImages] = useState<any[] | null>([]);
  const [selectedImages, setSelectedImages] = useState<any | null>([]);

  const handleImageChange = (e: any) => {
    const files = e.target.files;
    setSelectedImages([...selectedImages, ...files]);
  };

  //  Код для отладки
  useEffect(() => {
    console.log(selectedImages);
  }, [selectedImages]);

  useEffect(() => {
    if (go) {
      handleImageUpload(selectedImages, bookId);

      setTimeout(() => {
        getFiles();
      }, 800)

    }
  }, [go]);

  async function getFiles() {
    const images = await getBookImage(bookId);
    setImages(images);
  }

  return (
    <FormItem>
      <input
        className="file-input"
        type="file"
        multiple
        onChange={handleImageChange}
        style={imageInputStyles}
      />

      {images && images.map((image, id) => {
        return <img key={id} src={'http://localhost:3100/' + image.path} />
      })}
    </FormItem>
  )
}