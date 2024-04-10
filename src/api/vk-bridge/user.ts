import bridge from "@vkontakte/vk-bridge"
import { IVkUser } from "../../interfaces/interface";

export const fetchVkUser = async (): Promise<IVkUser> => {
  console.log('hello user');
  const user: IVkUser = await bridge.send('VKWebAppGetUserInfo');
  return user;
}