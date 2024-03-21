import { api } from "../../axios/axiosInstance";

export async function handleImageUpload(selectedIamges: any) {
  try {
    const formData = new FormData();
    console.log('still working');

    selectedIamges.forEach((image: any) => {
      formData.append('images', image);
    });
    console.log('still working');

    const bookId: string = '123123';
    formData.append('book-id', bookId);
    console.log('still working');

    const response = await api.post('/image/load', formData, {
      onUploadProgress: (progressEvent: any) => {
        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        console.log(progress);
      }
    });

    console.log('still working');

    return response;
  }
  catch (error) {
    console.log(error);
  }
}

export const getBookImage = async () => {
  try {
    const bookId = '123123';
    const response = await api.get('/book' + bookId + '/images');
    return response;
  }
  catch (error) {
    console.log(error);

  }
}