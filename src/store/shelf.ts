import { createStore } from "effector";
import { $books } from "./books";
import { createBookFX } from "../api/server/books/books";
import { IBookOnShelf } from "../interfaces/interface";
import { FindBooksOnShelfFX } from "../api/server/shelf/shelf";

export const $booksOnShelf = createStore<any>([]);

$booksOnShelf.on(FindBooksOnShelfFX.doneData, (prev, next) => {
  if (Array.isArray(next)) {
    return [...prev, ...next];
  }
  return prev;
});