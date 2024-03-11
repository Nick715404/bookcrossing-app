import { createStore } from "effector";
import { $books } from "./books";
import { createBookFX } from "../api/server/books/books";

export const $shelf = createStore<any[]>([]);

// $shelf.on(createBookFX.doneData, (prev, onShelf) => [...prev, onShelf]);