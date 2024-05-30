import { api } from "./axiosInstance";

export async function handleImageUpload(selectedImages: any, bookId: string | undefined) {
  try {
    const formData = new FormData();
    console.log(selectedImages);

    selectedImages.forEach((image: any) => {
      formData.append('images', image);
    });

    formData.append('book-id', bookId || '');

    const response = await api.post('/image/load', formData);
    return response;
  }
  catch (error) {
    throw new Error('Failed to upload image!');
  }
};

export async function updateImage(selectedImages: File[], bookId: string | undefined, imageId: string) {
  if (!bookId || selectedImages.length === 0) return;

  const formData = new FormData();
  formData.append('images', selectedImages[0]);
  formData.append('book-id', bookId);

  try {
    const response = await api.patch(`/image/update/${imageId}`, formData);
    return response;
  }
  catch (error) {
    throw error;
  };
};

export const getBookImage = async (bookId: string | undefined) => {
  try {
    if (!bookId) return;
    const response = await api.get('/image/' + bookId + '/images');
    if (response.statusText !== 'OK') {
      console.log('failed');
      return null
    }

    const { data } = await response;

    return data;
  }
  catch (error) {
    throw new Error('Failed to get image from book');
  }
};