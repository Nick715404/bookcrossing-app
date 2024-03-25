import App from "./App";
import '@vkontakte/vkui/dist/vkui.css';

import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import { appRouter } from "./constants/vk-router";
import UserProvider from "./utilities/UserProvider";
import bridge from "@vkontakte/vk-bridge";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import ReactDOM, { render } from "react-dom";
import InitAppEntities from "./init-app-entities/InitAppEntities";
import InitAppModals from "./init-app-entities/InitAppModals";
import Router from "./router/Router";

// Init VK  Mini App
bridge.send("VKWebAppInit");


ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <InitAppEntities>
          <UserProvider>
          <AppRoot>
            <InitAppModals>
              <RouterProvider router={appRouter}>
                <App />
              </RouterProvider>
            </InitAppModals>
          </AppRoot>
        </UserProvider>
      </InitAppEntities>
      
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
