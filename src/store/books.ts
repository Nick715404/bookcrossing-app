import { IBook } from "../interfaces/interface";
import { createBookFX, deleteBookFX, getAllBooksFX } from "../api/server/books/books";
import { sortBookFx } from "../utilities/category/category.utils";
import { LOADING_STATUS } from "../constants/loadingStatus";
import { ChangeLoadingStatusFX } from "../utilities/loading/loading.utils";
import { searchHandlerFX } from "../utilities/search/search.utils";
import { EditArrayFX } from "./favorites";
import { MoveBooksToStoreFX } from "../utilities/books/books.utils";

import { createEffect, createEvent, createStore } from "effector";
import { fetchBooks } from "../api/server/books/books.query";

export const $searchBooks = createStore<IBook[]>([]);
export const $books = createStore<IBook[]>([]);
export const $status = createStore<string>(LOADING_STATUS.IDLE);
export const $sortedBooks = createStore<IBook[]>([]);

export const ChangeArrayFX = createEvent<{ id: string, favourite: string }>();
$status.on(ChangeLoadingStatusFX.doneData, (_, action) => action);

$books.on(getAllBooksFX.doneData, (_, newBooks) => newBooks);
$books.on(MoveBooksToStoreFX.doneData, (books, newBooks) => [...books, ...newBooks])
$books.on(createBookFX.doneData, (books, newBooks) => [...books, newBooks]);
$books.on(deleteBookFX.doneData, (book, newBook) => {
  const newBooks = book.filter(item => item.id !== newBook.id);
  return [...newBooks]
});
$books.on(ChangeArrayFX, (books, { id, favourite }) => {
  return books.map(book => {
    if (book.id === id) {
      return { ...book, favourite: favourite };
    }
    return book;
  });
});

$books.on(EditArrayFX, (books, { id, favourite }) => {
  return books.map(book => {
    if (book.id === id) {
      return { ...book, favourite: favourite };
    }
    return book;
  });
});

$sortedBooks.on(sortBookFx.doneData, (_, action) => [...action]);

$searchBooks.on(searchHandlerFX.doneData, (_, action) => [...action]);