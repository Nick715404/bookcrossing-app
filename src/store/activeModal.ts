import { createEvent, createStore } from "effector";

export const $statusActiveModal = createStore<string | null>(null);

export const setStatusActiveModal = createEvent<string | null>();

$statusActiveModal.on(setStatusActiveModal, (_, newModal) => newModal);