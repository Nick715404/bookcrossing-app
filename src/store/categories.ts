import { IBook, IGenre } from "../interfaces/interface";
import { getAllCategoriesFX } from "../api/server/categories/categories";
import { createStore } from "effector";
import { categoriesBooksFX } from "../utilities/category/category.utils";

export const $categories = createStore<IGenre[]>([]);
export const $booksWithCategory = createStore<IBook[]>([]);

interface ISortedBooks<T> {
  state: T[];
  action: T[];
}

$categories.on(getAllCategoriesFX.doneData, (_, categories) => categories);
$booksWithCategory.on(categoriesBooksFX.done, (state, { result }: { result: IBook[] }) => [...state, ...result]);
