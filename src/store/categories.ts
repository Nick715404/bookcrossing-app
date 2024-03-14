import { createStore } from "effector";
import { IGenre } from "../interfaces/interface";
import { getAllCategoriesFX } from "../api/server/categories/categories";

export const $categories = createStore<IGenre[]>([]);

$categories.on(getAllCategoriesFX.doneData, (_, categories) => categories);