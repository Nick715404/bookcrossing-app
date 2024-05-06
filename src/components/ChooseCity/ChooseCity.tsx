import { ICity } from "../../interfaces/interface";
import { UpdateUserCityFX } from "../../utilities/user/userCity";
import { fetchVkUser } from "../../api/vk-bridge/user";
import { GetCurrentUserFX } from "../../api/server/user/user";
import { setStatusActiveModal } from "../../store/activeModal";

import { CellButton, Div, Text } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

type Props = {
  data: ICity[]
}

const ChooseCity = ({ data }: Props) => {
  const router = useRouteNavigator();

  const handleClick = async (city: ICity) => {
    const user = await fetchVkUser();
    user.city = { id: city.id, title: city.title }
    GetCurrentUserFX(user);
    UpdateUserCityFX(city.title);
    router.push('/');
  };

  return (
    <Div style={{ padding: 0, marginBottom: '10px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Div style={{ padding: 0, marginBottom: '30px' }}>
        <img
          style={{ maxWidth: 206, margin: '40px auto 0' }}
          src="/img/onboarding/choose.png"
          alt="Выберите город"
        />
      </Div>
      <Div>
        <Text style={{ textAlign: 'center' }} weight="3">В каком городе вы находитесь?<br />Это обязательное форма выбора!</Text>
      </Div>
      <Div style={{ textAlign: 'center' }}>
        {
          data && data.map((city: ICity) => (
            <CellButton
              centered
              onClick={() => handleClick(city)}
              key={city.id}
            >
              {city.title}
            </CellButton>
          ))
        }
      </Div>
    </Div>
  )
}

export { ChooseCity };