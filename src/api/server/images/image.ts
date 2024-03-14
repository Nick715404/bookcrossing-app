import { api } from "../../axios/axiosInstance";

export async function handleImageUpload(selectedIamges: any) {
  try {
    const formData = new FormData();
    console.log('still working');

    selectedIamges.forEach((image: any) => {
      formData.append('images', image);
    });

    const bookId: string = '123';
    formData.append('book-id', bookId);


    const response = await api.post('/image/load', formData, {      
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