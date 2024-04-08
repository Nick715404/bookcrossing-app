import { RouteWithoutRoot, createHashRouter } from "@vkontakte/vk-mini-apps-router";

const routes: RouteWithoutRoot[] = [
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
    path: '/pageBook',
    panel: 'book-panel',
    view: 'panel',
  },
  {
    path: '/search',
    panel: 'search-panel',
    view: 'panel',
  },
  {
    path: '/genre/:id',
    panel: 'genre-panel',
    view: 'panel',
  },
]

export const appRouter = createHashRouter(routes);