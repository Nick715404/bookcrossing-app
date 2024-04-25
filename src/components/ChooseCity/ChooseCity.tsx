import { ICity } from "../../interfaces/interface";
import { UpdateUserCityFX } from "../../utilities/user/userCity";
import { $userCity } from "../../store/user";
import { fetchVkUser } from "../../api/vk-bridge/user";
import { GetCurrentUserFX } from "../../api/server/user/user";
import { setStatusActiveModal } from "../../store/activeModal";

import { useUnit } from "effector-react";
import { CellButton } from "@vkontakte/vkui";

type Props = {
  data: ICity[]
}

const ChooseCity = ({ data }: Props) => {
  const handleClick = async (city: ICity) => {

    UpdateUserCityFX(city.title);

    const user = await fetchVkUser();
    user.city = { id: city.id, title: city.title }

    GetCurrentUserFX(user);

    setTimeout(() => {
      setStatusActiveModal(null);
    }, 500)
  };

  return (
    <>
      {data && data.map((city: ICity) => (
        <CellButton
          onClick={() => handleClick(city)}
          key={city.id}
        >
          {city.title}
        </CellButton>
      ))}
    </>
  )
}

export { ChooseCity };