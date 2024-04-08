import { IBook } from "../interfaces/interface";
import { GetFavFromUser, PutBookToFavFX } from "../api/server/favorites/favorites";
import { createStore } from "effector";
import { deleteBookFX } from "../api/server/books/books";

export const $favBooks = createStore<IBook[]>([]);

$favBooks.on(GetFavFromUser.doneData, (books, newBooks) => [...books, ...newBooks]);
$favBooks.on(PutBookToFavFX.doneData, (books, newBook) => [...books, newBook]);
$favBooks.on(deleteBookFX.doneData, (book, newBook) => {
  const newBooks = book.filter(item => item.id !== newBook.id);
  return [...newBooks]
});