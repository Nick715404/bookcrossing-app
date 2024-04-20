import { IBook } from "../../interfaces/interface";

import { createEffect } from "effector";

export const MoveBooksToStoreFX = createEffect(async (data: IBook[]) => {
  return data;
});