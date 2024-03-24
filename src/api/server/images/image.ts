import { api } from "../../axios/axiosInstance";

export async function handleImageUpload(selectedIamges: any) {
  try {
    const formData = new FormData();

    selectedIamges.forEach((image: any) => {
      formData.append('images', image);
    });

    const bookId: string = 'clu0zb2u5000289aaz0lp7j9u';
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
    const bookId = 'clu0zb2u5000289aaz0lp7j9u';
    // - /image/clu0zb2u5000289aaz0lp7j9u/images
    const { data } = await api.get('/image/' + bookId + '/images');
    // console.log(data);
    return data;
  }
  catch (error) {
    console.log(error);

  }
}