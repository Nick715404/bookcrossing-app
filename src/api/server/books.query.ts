import { api, url } from "./axiosInstance";
import { IBook, ICreateBook, IShelfInfo } from "../../interfaces/interface";
import { createEffect } from "effector";

export const fetchBooks = async (): Promise<IBook[]> => {
  try {
    const { data } = await api.get<IBook[]>('/book/all');
    return data;
  }
  catch (error) {
    throw new Error('Error to fetch all books!' + error);
  }
};

export const createBook = async (book: ICreateBook): Promise<IBook> => {
  try {
    const response = await fetch(`${url}/book/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });

    if (!response.ok) throw new Error('Failed to create book!');

    const data: IBook = await response.json();
    return data;
  }
  catch (error) {
    throw new Error('Failed to create book!' + error);
  }
};

export const findBooksOnShelf = async (userId: string) => {
  try {
    const { data } = await api.get<IShelfInfo>(`/shelf/find/${userId}`);
    const { books } = data;
    return books;
  }
  catch (error) {
    throw new Error('Failed to fetch books on shelf!' + error);
  }
};

export const deleteBook = async (id: string) => {
  try {
    const { data } = await api.delete<IBook>(`/book/delete/${id}`);
    return data;
  }
  catch (error) {
    throw new Error('Failed to delete book!' + error);
  }
};

export const putBookInFavorites = async (bookId: string, userId: string) => {
  try {
    const favoritesData = {
      bookId: bookId,
      userId: userId
    }
    const { data } = await api.post<IBook>('/favorites/put', favoritesData);
    return data;
  }
  catch (error) {
    throw new Error('Failed to put book into shelf!' + error);
  }
};

export const getCurrentBook = async (id: string | undefined): Promise<IBook> => {
  try {
    const data: IBook = await getCurentBookFX(id);
    return data;
  }
  catch (error) {
    throw new Error('Failed while get current book!');
  }
};

export const editBookFX = createEffect(async (book: IBook) => {
  try {
    const { data } = await api.patch(`/book/edit/${book.id}`, book);
    return data;
  }
  catch (error) {
    throw new Error('Failed to patch book!' + error);
  }
});

export const getCurentBookFX = createEffect(async (id: string | undefined) => {
  try {
    const { data } = await api.get<IBook>(`/book/${id}`);
    return data
  }
  catch (error) {
    throw new Error('Failed white fetching current book!' + error);
  }
});