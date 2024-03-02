import { api } from "../../axios/axiosInstance";

export const handleImageUpload = async (selectedIamges: any) => {
  try {
    const formData = new FormData();

    selectedIamges.forEach((image: any) => {
      formData.append('images', image);
    });

    // сюда записывать юзерва вк-шного
    const bookId: string = '123';
    formData.append('book-id', bookId);

    const response = await api.post('/image', formData, {
      onUploadProgress: (progressEvent: any) => {
        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        console.log(progress);
      }
    });

    return response;
  }
  catch (error) {
    console.log(error);
  }
}

export const getBookImage = async () => {
  try {
    const bookId = '123';
    const response = await api.get('/book' + bookId + '/images');
    return response;
  }
  catch (error) {
    console.log(error);
    
  }
}