import { createStore } from "effector";
import { $books } from "./books";
import { createBookFX } from "../api/server/books/books";
import { IBookOnShelf } from "../interfaces/interface";

export const $booksOnShelf = createStore<IBookOnShelf[]>([]);

// $shelf.on(createBookFX.doneData, (prev, onShelf) => [...prev, onShelf]);