import styles from './ChooseCity.module.scss';

import { ICity } from "../../interfaces/interface";
import { ChooseCityList } from './ChooseCityList';
import { useChooseCity } from './useChooseCity';
import { Div, Text } from "@vkontakte/vkui";

type Props = { data: ICity[], };

export function ChooseCity({ data }: Props) {
  const handleClick = useChooseCity();

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
        <Text style={{ textAlign: 'center' }} weight="3">
          В каком городе вы находитесь?<br />Это обязательное форма выбора!
        </Text>
      </Div>
      <Div style={{ textAlign: 'center' }}>
        {data && <ChooseCityList handleClick={handleClick} data={data} />}
      </Div>
    </Div>
  );
};