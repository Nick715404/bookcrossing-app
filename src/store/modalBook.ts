import { createEvent, createStore } from "effector";
import { IBook } from "../interfaces/interface";
import Book from "../components/book/Book";


export const selectBook = createEvent<IBook>();
export const $selectedBook = createStore<IBook | null>(null);

$selectedBook.on(selectBook, (_, book) => book);
