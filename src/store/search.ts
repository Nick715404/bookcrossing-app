import { createEffect, createEvent, createStore, sample } from 'effector';
import { IBook } from '../interfaces/interface';
import { debounce } from 'patronum';

export const $search = createStore('');
export const $searchResult = createStore<IBook[]>([]);

const searchFx = createEffect(async (search: string) => {
  const response = await fetch("http://localhost:3100/api/book/all", {
    method: "POST",
    body: JSON.stringify({ query: search }),
  });
  if (response.ok) {
    return response.json();
  }
  throw await response.json();
});

export const searchChanged = createEvent<string>('');

$search.on(searchChanged, (_, search) => search);

const performSearch = debounce({ source: searchChanged, timeout: 500 });

sample({
  clock: performSearch,
  source: $search,
  target: searchFx,
});

$searchResult.on(searchFx.doneData, (_, results) => results);