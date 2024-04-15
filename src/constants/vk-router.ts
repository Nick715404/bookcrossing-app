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
    path: '/book/:id',
    panel: 'book-panel',
    view: 'panel',
  },
  {
    path: '/category/all',
    panel: 'category-panel-all',
    view: 'panel',
  },
  {
    path: '/category/:id',
    panel: 'category-panel-single',
    view: 'panel',
  },
  {
    path: '/main',
    panel: 'main-panel',
    view: 'panel'
  },
  {
    path: '/search',
    panel: 'search-panel',
    view: 'panel'
  },
  {
    path: '/userAgreement',
    panel: 'user-agreement',
    view: 'panel'
  }
]

export const appRouter = createHashRouter(routes);