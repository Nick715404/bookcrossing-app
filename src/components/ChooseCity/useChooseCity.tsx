import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { GetCurrentUserFX } from "../../api/server";
import { UpdateUserCityFX } from "../../utilities/user/userCity";
import { fetchVkUser } from "../../api/vk-bridge";
import { ICity } from "../../interfaces/interface";

export function useChooseCity() {
  const router = useRouteNavigator();

  const handleClick = async (city: ICity) => {
    const user = await fetchVkUser();
    user.city = { id: city.id, title: city.title }
    GetCurrentUserFX(user);
    UpdateUserCityFX(city.title);
    router.push('/');
  };

  return handleClick;
};