import { IBook } from "../../interfaces/interface";
import { api } from "../axios/axiosInstance"

export const SearchBooks = async (param: string) => {
  try {
    const { data } = await api.get(`/book/search?q=${param}`);
    const books: IBook[] = data.books;
    return books;
  } catch (error) {
    throw new Error("Failed while search book!");
  }
}