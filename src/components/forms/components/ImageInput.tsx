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
    width: '48%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '1 / 1',
    margin: '0 auto',
    backgroundColor: '#F2F3F5',
    borderRadius: '14px',
    color: 'transparent'
  }

  const uploadFiles = () => {
    handleImageUpload(selectedImages);
  }

  const getFiles = () => {
    getBookImage();
  }

  // Создать юзера с айди 123

  return (
    <div>
      <input
        className="file-input"
        type="file"
        multiple
        onChange={handleImageChange}
        style={styles}
      />

      {/* <button onClick={uploadFiles}>Загрузить фото</button>
      <button onClick={getFiles}>Получить картинки книги 123</button> */}

      <div className="">
        {images && images.map((image, id) => {
          return <img key={id} src={'http://localhost:3000' + image.path} />
        })}
      </div>

    </div>
  )
}