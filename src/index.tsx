import App from "./App";
import '@vkontakte/vkui/dist/vkui.css';

import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import { appRouter } from "./constants/vk-router";
import UserProvider from "./utilities/UserProvider";
import bridge from "@vkontakte/vk-bridge";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import ReactDOM from "react-dom";

// Init VK  Mini App
bridge.send("VKWebAppInit");


ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <UserProvider>
        <AppRoot>
          <RouterProvider router={appRouter}>
            <App />
          </RouterProvider>
        </AppRoot>
      </UserProvider>
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);

