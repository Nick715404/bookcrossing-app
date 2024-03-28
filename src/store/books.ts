import { createStore } from "effector";
import { IBook } from "../interfaces/interface";
import { createBookFX, getAllBooksFX } from "../api/server/books/books";

export const $books = createStore<IBook[]>([]);

$books.on(getAllBooksFX.doneData, (_, newBooks) => newBooks);
$books.on(createBookFX.doneData, (books, newBooks) => [...books, ...newBooks ]);