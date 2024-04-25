import { setStatusActiveModal } from '../../store/activeModal';
import { useCities } from '../../hooks/useCities';
import { Div, Group, ModalPage, ModalPageHeader, } from '@vkontakte/vkui';
import { Loader } from '../../utilities/cities/Loader';
import { ChooseCity } from '../ChooseCity/ChooseCity';
import { useState } from 'react';

type Props = {
  id: string
}

function ChooseCityModal({ id }: Props) {
  const [isCityChosen, setIsCityChosen] = useState(false);
  const { data, isFetching, isSuccess } = useCities();

  const handleClose = () => {
    if (isCityChosen) setStatusActiveModal(null);
  }

  return (
    <ModalPage
      id={id}
      settlingHeight={700}
      onClose={handleClose}
      header={
        <ModalPageHeader>Укажите ваш город</ModalPageHeader>
      }
    >
      <Div>
        <Group>
          {isFetching && <Loader />}
          {isSuccess && <ChooseCity data={data.response.items} />}
        </Group>
      </Div>
    </ModalPage >
  )
}

export { ChooseCityModal };