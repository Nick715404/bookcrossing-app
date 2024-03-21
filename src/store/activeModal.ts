import { createEvent, createStore } from "effector";

export const $statusActivModal = createStore<string | null>(null);
export const setStatusActiveModal = createEvent<string | null>();

$statusActivModal.on(setStatusActiveModal, (_, newModal) => newModal);