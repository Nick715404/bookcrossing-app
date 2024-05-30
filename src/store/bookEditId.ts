import { getCurentBookFX } from "../api/server/books.query";
import { IBook } from "../interfaces/interface";
import { createStore } from "effector";

export const $editingBook = createStore<IBook | null>(null);

$editingBook.on(getCurentBookFX.doneData, (_, book) => book);