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
    console.log(error);
  }
}

export const getBookImage = async (bookId: string) => {
  try {
    // - /image/clu0zb2u5000289aaz0lp7j9u/images
    const { data } = await api.get('/image/' + bookId + '/images');
    return data;
  }
  catch (error) {
    console.log(error);

  }
}