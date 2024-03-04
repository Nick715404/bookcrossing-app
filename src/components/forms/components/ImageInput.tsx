import { useEffect, useState } from "react";
import { handleImageUpload } from "../../../api/server/images/image";
import { getBookImage } from "../../../api/server/images/image";

export default function ImageInput() {

  const [images, setImages] = useState<any[] | null>([]);
  const [selectedImages, setSelectedImages] = useState<any | null>([]);

  const handleImageChange = (e: any) => {
    const files = e.target.files;
    setSelectedImages([...selectedImages, ...files]);
  }

  useEffect(() => {
    console.log(selectedImages);
  }, [selectedImages]);

  const styles = {
    height: '44px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div>
      <input 
      type="file" 
      multiple 
      onChange={handleImageChange}
      style={styles}
      />
{/* 
      <button onClick={handleImageUpload}>Загрузить фото</button>
      <button onClick={getBookImage}>Получить картинки книги 123</button> */}

      <div className="">
          {images && images.map((image, id) => {
            return <img key={id} src={'http://localhost:3000' + image.path} />
          })}
      </div>

    </div>
  )
}