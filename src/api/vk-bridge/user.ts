import { IVkUser } from "../../interfaces/interface";
import bridge from "@vkontakte/vk-bridge"

export const fetchVkUser = async (): Promise<IVkUser> => {
  const user: IVkUser = await bridge.send('VKWebAppGetUserInfo');
  return user;
};