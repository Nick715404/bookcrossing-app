import { FormItem } from "@vkontakte/vkui";

import { useEffect, useState } from "react";
import { handleImageUpload } from "../../../../api/server/images/image";
import { getBookImage } from "../../../../api/server/images/image";
import { imageInputStyles } from "../../../../constants/utils";

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
  }

  // - Код для отладки
  useEffect(() => {
    console.log(selectedImages);
  }, [selectedImages]);

  const uploadFiles = () => {
    handleImageUpload(selectedImages, bookId);
  }

  const getFiles = async () => {
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

      {/* <button onClick={uploadFiles}>Загрузить фото</button>
      <button onClick={getFiles}>Получить картинки книги 123</button> */}

      {/* <div>
        {images && images.map((image, id) => {
          return <img key={id} src={'http://localhost:3100/' + image.path} />
        })}
      </div> */}

    </FormItem>
  )
}