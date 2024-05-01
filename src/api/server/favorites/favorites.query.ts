import { IBook } from "../../../interfaces/interface";
import { api } from "../../axios/axiosInstance";

interface IFetchedFromFav {
  books: IBook[]
}

export const fetchBooksFromFavorites = async (id: string) => {
  try {
    const { data } = await api.get(`/favorites/find/${id}`);
    const { books }: IFetchedFromFav = await data;
    return books;
  }
  catch (error) {
    throw new Error('Failed to fetch favorite from user!')
  }
}

export const removeFromFav = async ({ bookId, vkId }: { bookId: string, vkId: number }) => {
  const favoritesData = {
    bookId: bookId,
    userId: vkId
  }
  try {
    const { data } = await api.post('/favorites/delete', favoritesData);
    return data.book;
  } catch (error: any) {
    throw new Error(error);
  }
};