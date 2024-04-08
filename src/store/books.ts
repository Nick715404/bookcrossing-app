import { createEffect, createEvent, createStore } from "effector";
import { IBook } from "../interfaces/interface";
import { createBookFX, getAllBooksFX } from "../api/server/books/books";

export const $books = createStore<IBook[]>([]);

// export const $books = createStore<IBook>({
//     id: '',
//     author: '',
//     isbn: '',
//     title: '',
//     state: '',
// });

$books.on(getAllBooksFX.doneData, (_, newBooks) => newBooks);
$books.on(createBookFX.doneData, (books, newBooks) => [books, newBooks ]);


//export const fetchDataBookFX = createEvent();
// export const fetchDataBookFX = createEffect<void, IBook[]>().use(async () => {
//     const response = await fetch('http://localhost:3100/api/book');
//     const data = await response.json();
//     return data;
// })

// export const $data = createStore<IBook[]>([]).on(fetchDataBookFX.doneData, (_, data) => data);
// $books.on(createBookFX.doneData, (books, newBooks) => newBooks);