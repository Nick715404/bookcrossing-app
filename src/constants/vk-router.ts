import { RouteWithoutRoot, createHashRouter } from "@vkontakte/vk-mini-apps-router";

const routes: RouteWithoutRoot[] = [
  {
    path: '/',
    panel: 'catalog-panel',
    view: 'catalog-view',
  },
  {
    path: '/profile',
    panel: 'profile-panel',
    view: 'profile-view',
  },
  {
    path: '/create',
    panel: 'create-panel',
    view: 'create-view',
  },
  {
    path: '/book/:id',
    panel: 'book-panel',
    view: 'book-view',
  },
  {
    path: '/category/all',
    panel: 'category-panel-all',
    view: 'category-view-all',
  },
  {
    path: '/category/:id',
    panel: 'category-panel-single',
    view: 'category-view-single',
  },
  {
    path: '/main',
    panel: 'main-panel',
    view: 'main-view'
  },
  {
    path: '/search',
    panel: 'search-panel',
    view: 'search-view'
  },
  {
    path: '/userAgreement',
    panel: 'user-agreement',
    view: 'user-agreement-view'
  },
  {
    path: '/editBook',
    panel: 'edit-book',
    view: 'edit-book-view'
  },
  {
    path: '/onboarding',
    panel: 'onboarding-panel',
    view: 'onboarding-view'
  },
  {
    path: '/choose-city',
    panel: 'choose-city-panel',
    view: 'choose-city-view'
  },
]

export const appRouter = createHashRouter(routes);