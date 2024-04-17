import { api } from "../../axios/axiosInstance";

export async function handleImageUpload(selectedImages: any, bookId: string) {
  try {
    const formData = new FormData();

    selectedImages.forEach((image: any) => {
      formData.append('images', image);
    });

    formData.append('book-id', bookId);

    const response = await api.post('/image/load', formData, {
      onUploadProgress: (progressEvent: any) => {
        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
      }
    });
    return response;
  }
  catch (error) {
    throw new Error('Failed to upload image!');
  }
}

export const getBookImage = async (bookId: string | undefined) => {
  try {

    if (!bookId) return;

    const { data } = await api.get('/image/' + bookId + '/images');
    return data;
  }
  catch (error) {
    throw new Error('Failed to get image from book');
  }
}