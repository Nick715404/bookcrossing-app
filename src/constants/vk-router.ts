import { createHashRouter } from "@vkontakte/vk-mini-apps-router";

export const appRouter = createHashRouter([
  {
    path: '/',
    panel: 'home-panel',
    view: 'panel',
  },
]);