import { createEffect, createEvent, createStore } from "effector";
import { BookStoreState, IBook } from "../interfaces/interface";
import { createBookFX, deleteBookFX, getAllBooksFX } from "../api/server/books/books";
import { sortBookFx } from "../utilities/category/category.utils";
import { LOADING_STATUS } from "../constants/loadingStatus";
import { ChangeLoadingStatusFX } from "../utilities/loading/loading.utils";
import { searchHandlerFX } from "../utilities/search/search.utils";

export const $searchBooks = createStore<IBook[]>([]);
export const $books = createStore<IBook[]>([]);
export const $status = createStore<string>(LOADING_STATUS.IDLE);
export const $sortedBooks = createStore<BookStoreState>({
  category: '',
  books: []
});

$status.on(ChangeLoadingStatusFX.doneData, (_, action) => action);

$books.on(getAllBooksFX.doneData, (_, newBooks) => newBooks);
$books.on(createBookFX.doneData, (books, newBooks) => [...books, newBooks]);
$books.on(deleteBookFX.doneData, (book, newBook) => {
  const newBooks = book.filter(item => item.id !== newBook.id);
  return [...newBooks]
});

$sortedBooks.on(sortBookFx, (_, action) => {
  return {
    category: action.category,
    books: action.books
  };
});

$searchBooks.on(searchHandlerFX.doneData, (_, action) => [...action]);