import { IBook } from "../interfaces/interface";
import { BookInFavIcon, GetFavFromUser, PutBookToFavFX } from "../api/server/favorites/favorites";
import { createStore } from "effector";

export const $favBooks = createStore<IBook[]>([]);

$favBooks.on(GetFavFromUser.doneData, (books, newBooks) => [...books, ...newBooks]);
$favBooks.on(PutBookToFavFX.doneData, (books, newBook) => [...books, newBook]);