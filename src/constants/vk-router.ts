import { createHashRouter } from "@vkontakte/vk-mini-apps-router";

export const appRouter = createHashRouter([
  {
    path: '/',
    panel: 'catalog-panel',
    view: 'panel',
  },
  {
    path: '/profile',
    panel: 'profile-panel',
    view: 'panel',
  },
  {
    path: '/create',
    panel: 'create-panel',
    view: 'panel',
  },
  {
    path: '/genre/:id',
    panel: 'single-genre-panel',
    view: 'panel',
  },
]);