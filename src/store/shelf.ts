import { createStore } from "effector";
import { $books } from "./books";
import { createBookFX } from "../api/server/books/books";
import { IBookOnShelf } from "../interfaces/interface";
import { FindBooksOnShelf } from "../api/server/shelf/shelf";

export const $booksOnShelf = createStore<any>([]);

// $booksOnShelf.on(FindBooksOnShelf.doneData, (prev, onShelf) => {
//   console.log(onShelf);
  
//    return [...prev, ...onShelf]
// });