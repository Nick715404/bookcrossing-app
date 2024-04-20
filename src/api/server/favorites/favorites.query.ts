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