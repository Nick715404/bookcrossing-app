import { createStore } from "effector";
import { $books } from "./books";
import { createBookFX, deleteBookFX } from "../api/server/books/books";

import { FindBooksOnShelfFX } from "../api/server/shelf/shelf";
import { IBookOnShelf } from "../interfaces/interface";

export const $booksOnShelf = createStore<IBookOnShelf[]>([]);

$booksOnShelf.on(FindBooksOnShelfFX.doneData, (prev, next) => {
  if (Array.isArray(next)) {
    return [...prev, ...next];
  }
  return prev;
});

$booksOnShelf.on(createBookFX.doneData, (book, newBook) => [...book, newBook]);
$booksOnShelf.on(deleteBookFX.doneData, (book, newBook) => {
  const newBooks = book.filter(item => item.id !== newBook.id);
  return [...newBooks]
});