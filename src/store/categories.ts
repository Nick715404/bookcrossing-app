import { IBook, IGenre } from "../interfaces/interface";
import { getAllCategoriesFX } from "../api/server/categories";
import { createStore } from "effector";

export const $categories = createStore<IGenre[]>([]);

$categories.on(getAllCategoriesFX.doneData, (_, categories) => categories);
