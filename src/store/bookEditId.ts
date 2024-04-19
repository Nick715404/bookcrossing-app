import { IBook } from "../interfaces/interface";
import { editBookFX, getCurentBookFX } from "../api/server/books/books";
import { createStore } from "effector";

export const $editingBook = createStore<IBook | null>(null);

$editingBook.on(getCurentBookFX.doneData, (_, book) => book);