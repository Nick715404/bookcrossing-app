import { ICity } from "../../interfaces/interface";
import { UpdateUserCityFX } from "../../utilities/user/userCity";
import { fetchVkUser } from "../../api/vk-bridge/user";
import { GetCurrentUserFX } from "../../api/server/user/user";
import { setStatusActiveModal } from "../../store/activeModal";

import { CellButton, Div, Text } from "@vkontakte/vkui";

type Props = {
  data: ICity[]
}

const ChooseCity = ({ data }: Props) => {

  const handleClick = async (city: ICity) => {
    const user = await fetchVkUser();
    user.city = { id: city.id, title: city.title }
    GetCurrentUserFX(user);
    UpdateUserCityFX(city.title);
    setTimeout(() => {
      setStatusActiveModal(null);
    }, 500)
  };

  return (
    <Div style={{ padding: 0, marginBottom: '10px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Div style={{ padding: 0, marginBottom: '30px' }}>
        <img
          style={{ maxWidth: 206, margin: '0 auto' }}
          src="/img/onboarding/page6.png"
          alt="Выберите город"
        />
      </Div>
      <Div>
        <Text style={{ textAlign: 'center' }} weight="3">В каком городе вы находитесь?<br />Позже вы сможете поменять его в настройках</Text>
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