import App from "./App";
import '@vkontakte/vkui/dist/vkui.css';

import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import { appRouter } from "./constants/vk-router";
import InitAppEntities from "./utilities/providers/InitAppEntities";
import bridge from "@vkontakte/vk-bridge";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import ReactDOM from "react-dom";

// - Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <RouterProvider router={appRouter}>
        <InitAppEntities>
          <App />
        </InitAppEntities>
      </RouterProvider>
    </AdaptivityProvider>
  </ConfigProvider >,
  document.getElementById("root")
);
