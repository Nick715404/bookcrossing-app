import { setStatusActiveModal } from "../../../store/activeModal"
import { IPassIdToModalPage } from "../../../interfaces/interface"

import { $currentBookId } from "../../../store/modalBook"
import { deleteBookFX } from "../../../api/server/books/books"

import { Icon56DeleteOutline } from '@vkontakte/icons';
import { useUnit } from "effector-react"
import { Button, ButtonGroup, Div, ModalCard } from "@vkontakte/vkui"

export default function ModalAcceptDeleteV2({ id, changeActiveModal }: IPassIdToModalPage) {
  const bookId = useUnit($currentBookId);

  const handleDelete = () => {
    deleteBookFX(bookId);
    setStatusActiveModal(null);
  };

  return (
    <ModalCard
      id={id}
      icon={<Icon56DeleteOutline />}
      onClose={() => setStatusActiveModal(null)}
      header='Вы уверены, что хотите удалить книгу из каталога?'
      subheader='Удалив книгу из каталога, вы не сможете её востановить'
      actions={
        <ButtonGroup mode="horizontal" gap="m" stretched>
          <Button
            key="dismiss"
            size="l"
            mode="primary"
            stretched
            onClick={() => setStatusActiveModal(null)}
          >
            Отменить
          </Button>
          <Button
            key="delete"
            size="l"
            mode="secondary"
            stretched
            onClick={handleDelete}
          >
            Удалить
          </Button>
        </ButtonGroup>
      }
    />
  )
}