import styles from './ChooseCity.module.scss';

import { ICity } from "../../interfaces/interface";
import { ChooseCityList } from './ChooseCityList';
import { useChooseCity } from './useChooseCity';
import { Div, Text } from "@vkontakte/vkui";

type Props = { data: ICity[], };

export function ChooseCity({ data }: Props) {
  const handleClick = useChooseCity();

  return (
    <Div className={styles.wrapper}>
      <Div className={styles.imgBox}>
        <img className={styles.img} src="/img/onboarding/choose.png" alt="Выберите город" />
      </Div>
      <Div>
        <Text className={styles.centeredText} weight="3">
          В каком городе вы находитесь?<br />Это обязательное форма выбора!
        </Text>
      </Div>
      <Div className={styles.centeredText}>
        {data && <ChooseCityList handleClick={handleClick} data={data} />}
      </Div>
    </Div>
  );
};