import { IBook } from "../interfaces/interface";
import { GetFavFromUser, PutBookToFavFX, RemoveFromFavFX } from "../api/server/favorites/favorites";
import { deleteBookFX } from "../api/server/books/books";

import { createEffect, createEvent, createStore } from "effector";
import { ChangeArrayFX } from "./books";

export const $favBooks = createStore<IBook[]>([]);
export const $favoritesStatus = createStore<string>('');

export const EditArrayFX = createEvent<{ id: string, favourite: string }>();

export const SwitchFavoritesStatus = createEffect((status: string) => {
  if (status !== 'passed') {
    return 'error'
  }
  return status;
})

$favBooks.on(GetFavFromUser.doneData, (books, newBooks) => [...books, ...newBooks]);
$favBooks.on(PutBookToFavFX.doneData, (books, newBook) => [...books, newBook]);
$favBooks.on(deleteBookFX.doneData, (book, newBook) => {
  const newBooks = book.filter(item => item.id !== newBook.id);
  return [...newBooks]
});
$favBooks.on(RemoveFromFavFX.doneData, (book, newBook) => {  
  const newBooks = book.filter(item => item.id !== newBook.book.id);
  return [...newBooks]
})

$favBooks.on(EditArrayFX, (books, { id, favourite }) => {
  return books.map(book => {
    if (book.id === id) {
      return { ...book, favourite: favourite };
    }
    return book;
  });
});