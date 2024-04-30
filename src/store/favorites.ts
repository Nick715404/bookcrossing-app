import { IBook } from "../interfaces/interface";

import { createEffect, createEvent, createStore } from "effector";

// - Stores
export const $favBooks = createStore<IBook[]>([]);
export const $favoritesStatus = createStore<string>('');

// - Effects
export const EditArrayFX = createEvent<{ id: string, favourite: string }>();
export const PutBookInFavFX = createEffect((data: IBook) => data);
export const GetAllBooksFromFavFX = createEffect((data: IBook[]) => data);
export const DeleteBookFromFavPipeFX = createEffect((data: IBook) => data);

// - Store manipulation
$favBooks.on(GetAllBooksFromFavFX.doneData, (_, newBooks) => newBooks)
$favBooks.on(PutBookInFavFX.doneData, (books, newBook) => {
  console.log(books, newBook);
  return [...books, newBook]
});
$favBooks.on(DeleteBookFromFavPipeFX.doneData, (books, newBook) => {
  const newBooks = books.filter(item => item.id !== newBook.id);
  return [...newBooks]
});