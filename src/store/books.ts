import { createStore } from "effector";
import { IBook } from "../interfaces/interface";
import { createBookFX, getAllBooksFX } from "../api/server/books/books";
import { categoriesBooksFX } from "../utilities/category/category.utils";

export const $books = createStore<IBook[]>([]);
export const $sortedBooks = createStore<IBook[]>([]);

$books.on(getAllBooksFX.doneData, (_, newBooks) => newBooks);
$books.on(createBookFX.doneData, (books, newBooks) => [...books, newBooks]);
$sortedBooks.on(categoriesBooksFX.doneData, (_, sortedBooks) => [...sortedBooks])