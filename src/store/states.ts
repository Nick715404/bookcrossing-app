import { createEvent, createStore } from "effector";

const showSnackbarFX = createEvent<{ text: string; icon: any; duration: number }>();
const hideShackbarFX = createEvent();

const initialState = {
  text: '',
  icon: null,
  duration: 0,
};

const $snackbar = createStore(initialState)
  .on(showSnackbarFX, (_, snackbar) => snackbar)
  .reset(hideShackbarFX);

export { $snackbar, showSnackbarFX, hideShackbarFX };