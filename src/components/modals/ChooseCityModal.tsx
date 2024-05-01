import { setStatusActiveModal } from '../../store/activeModal';
import { useCities } from '../../hooks/useCities';
import { Div, Group, ModalPage, ModalPageHeader, } from '@vkontakte/vkui';
import { Loader } from '../../utilities/cities/Loader';
import { ChooseCity } from '../ChooseCity/ChooseCity';

type Props = {
  id: string
}

function ChooseCityModal({ id }: Props) {
  const { data, isFetching, isSuccess } = useCities();

  const handleClose = () => {
    setStatusActiveModal(null);
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