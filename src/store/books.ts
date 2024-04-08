import { createEffect, createEvent, createStore } from "effector";
import { IBook } from "../interfaces/interface";
import { createBookFX, deleteBookFX, getAllBooksFX } from "../api/server/books/books";
import { categoriesBooksFX } from "../utilities/category/category.utils";
import { LOADING_STATUS } from "../constants/loadingStatus";
import { ChangeLoadingStatusFX } from "../utilities/loading/loading.utils";

export const $books = createStore<IBook[]>([]);
export const $sortedBooks = createStore<IBook[]>([]);
export const $status = createStore<string>(LOADING_STATUS.IDLE);

$books.on(getAllBooksFX.doneData, (_, newBooks) => newBooks);
$books.on(createBookFX.doneData, (books, newBooks) => [...books, newBooks]);
$books.on(deleteBookFX.doneData, (book, newBook) => {
  const newBooks = book.filter(item => item.id !== newBook.id);
  return [...newBooks]
});

$status.on(ChangeLoadingStatusFX.doneData, (_, action) => action);