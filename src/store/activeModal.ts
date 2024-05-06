import { createEvent, createStore } from "effector";

export const $statusActiveModal = createStore<string | null>(null);
export const $statusActiveSnackbar = createStore<string | null>(null);

export const setStatusActiveModal = createEvent<string | null>();
export const setSnackbar = createEvent<string | null>();

$statusActiveModal.on(setStatusActiveModal, (_, newModal) => newModal);
$statusActiveSnackbar.on(setSnackbar, (_, action) => action);