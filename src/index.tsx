import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import '@vkontakte/vkui/dist/vkui.css';

import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import { appRouter } from "./constants/vk-router";
import { StrictMode } from "react";

// Init VK  Mini App
bridge.send("VKWebAppInit");

// засунеть splitlayout
// глобальное состояние с текущей книгой

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot>
        <RouterProvider router={appRouter}>
            <App />
        </RouterProvider>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);

