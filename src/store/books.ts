import { createEffect, createEvent, createStore } from "effector";
import { IBook } from "../interfaces/interface";
import { createBookFX, deleteBookFX, getAllBooksFX } from "../api/server/books/books";
import { categoriesBooksFX } from "../utilities/category/category.utils";

export const $books = createStore<IBook[]>([]);
export const $sortedBooks = createStore<IBook[]>([]);

$books.on(getAllBooksFX.doneData, (_, newBooks) => newBooks);
$books.on(createBookFX.doneData, (books, newBooks) => [...books, newBooks]);
$books.on(deleteBookFX.doneData, (book, newBook) => {
  const newBooks = book.filter(item => item.id !== newBook.id);
  return [...newBooks]
});