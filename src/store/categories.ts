import { IBook, IGenre } from "../interfaces/interface";
import { getAllCategoriesFX } from "../api/server/categories/categories";
import { categoriesBooksFX } from "../utilities/category/category.utils";
import { createStore } from "effector";

export const $categories = createStore<IGenre[]>([]);
export const $booksWithCategory = createStore<IBook[]>([]);

$categories.on(getAllCategoriesFX.doneData, (_, categories) => categories);