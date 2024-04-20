import { IBook, ICreateBook, IShelfInfo } from "../../../interfaces/interface";
import { api, url } from "../../axios/axiosInstance";

export const fetchBooks = async () => {
  try {
    const { data } = await api.get('/book/all');
    const fetchedData: IBook[] = data;
    return fetchedData;
  } catch (error) {
    throw new Error('Error to fetch all books!');
  }
}

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
    throw new Error('Failed to create book!');
  }
};

export const findBooksOnShelf = async (userId: string) => {
  try {
    const { data } = await api.get(`/shelf/find/${userId}`);
    const shelf: IShelfInfo = data;
    const shelfBooks = shelf.books;
    return shelfBooks;
  }
  catch (error) {
    throw new Error('Failed to fetch books on shelf!');
  }
};

export const deleteBook = async (id: string) => {
  try {
    const { data } = await api.delete(`/book/delete/${id}`);
    const deletedBook: IBook = data;
    return deletedBook;
  }
  catch (error) {
    throw new Error('Failed to delete book!');
  }
}

export const putBookInFavorites = async (bookId: string, userId: string) => {
  try {
    const favoritesData = {
      bookId: bookId,
      userId: userId
    }
    const { data } = await api.post('/favorites/put', favoritesData);
    return data;
  }
  catch (error) {
    throw new Error('Failed to put book into shelf!');
  }
}