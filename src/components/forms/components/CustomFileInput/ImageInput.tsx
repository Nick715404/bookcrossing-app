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

  const [images, setImages] = useState<any[]>([]);
  const [selectedImages, setSelectedImages] = useState<any | null>([]);
  const [urls, setUrls] = useState<string[]>([]);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const target = e.target;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      setUrls([...urls, e.target.result])
    };
    reader.readAsDataURL(file);
  };



  //Код для отладки
  useEffect(() => {
    console.log(selectedImages);
  }, [selectedImages]);

  useEffect(() => {
    if (go) {
      handleImageUpload(selectedImages, bookId);
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

      {urls.map((item: any, index: any) => (
        <img key={index} src={item} alt="" />
      ))}

    </FormItem>
  )
}