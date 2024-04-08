import { IBook, IGenre } from "../interfaces/interface";
import { getAllCategoriesFX } from "../api/server/categories/categories";
import { createStore } from "effector";
import { categoriesBooksFX } from "../utilities/category/category.utils";

export const $categories = createStore<IGenre[]>([]);

$categories.on(getAllCategoriesFX.doneData, (_, categories) => categories);
