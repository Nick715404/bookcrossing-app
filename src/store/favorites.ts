import { createStore } from "effector";
import { IBook } from "../interfaces/interface";
import { GetFavFromUser } from "../api/server/favorites/favorites";

export const $favBooks = createStore<IBook[]>([]);

$favBooks.on(GetFavFromUser.doneData, (books, newBooks) => [...books, ...newBooks]);