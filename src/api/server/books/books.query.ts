import { api } from "../../axios/axiosInstance";

export const fetchBooks = async () => {
  try {
    const { data } = await api.get('/book/all');
    return data;
  } catch (error) {
    throw new Error('Error to fetch all books!');
  }
}