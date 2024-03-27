import App from "./App";
import '@vkontakte/vkui/dist/vkui.css';

import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import { appRouter } from "./constants/vk-router";
import UserProvider from "./utilities/UserProvider";
import InitAppEntities from "./utilities/InitAppEntities";
import InitAppModals from "./utilities/InitAppModals";
import Router from "./router/Router";
import bridge from "@vkontakte/vk-bridge";
import ReactDOM, { render } from "react-dom";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";

// Init VK  Mini App
bridge.send("VKWebAppInit");


ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <InitAppEntities>
        <AppRoot>
          <InitAppModals>
            <RouterProvider router={appRouter}>
              <App />
            </RouterProvider>
          </InitAppModals>
        </AppRoot>
      </InitAppEntities>
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
