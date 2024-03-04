import { createStore } from "effector";
import { IBook } from "../interfaces/interface";
import { getAllBooksFX } from "../api/server/books/books";

export const $books = createStore<IBook[]>([]);

$books.on(getAllBooksFX.doneData, (_, newBooks) => newBooks);