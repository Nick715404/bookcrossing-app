import { IBook, IGenre } from '../types/interface';
import { getAllCategoriesFX } from '../api/server/categories/categories';
import { createStore } from 'effector';

export const $categories = createStore<IGenre[]>([]);

$categories.on(getAllCategoriesFX.doneData, (_, categories) => categories);
