import { setSnackbar, setStatusActiveModal } from "../../../store/activeModal"
import { IPassIdToModalPage } from "../../../interfaces/interface"
import { $currentBookId } from "../../../store/modalBook"
import { deleteBook } from "../../../api/server/books.query";
import { DeleteBookFromFavPipeFX } from "../../../store/favorites";
import { DeleteBookPipeFX } from "../../../store/books";

import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Icon56DeleteOutline } from '@vkontakte/icons';
import { useUnit } from "effector-react"
import { Button, ButtonGroup, ModalCard } from "@vkontakte/vkui"

export default function ModalAcceptDeleteV2({ id }: IPassIdToModalPage) {
  const bookId = useUnit($currentBookId);
  const client = useQueryClient();
  const { mutate, isSuccess, data } = useMutation({
    mutationKey: ['delete book'],
    mutationFn: () => deleteBook(bookId),
    onSuccess: () => {
      setSnackbar('book-remove')
      client.invalidateQueries({
        queryKey: ['books all', 'books shelf']
      });
    },
  })

  useEffect(() => {
    if (isSuccess) {
      DeleteBookPipeFX(data);
      DeleteBookFromFavPipeFX(data);
      setStatusActiveModal(null);
    }
  }, [data, isSuccess]);

  const handleDelete = () => {
    mutate();
  };

  return (
    <>
      <ModalCard
        id={id}
        icon={<Icon56DeleteOutline />}
        onClose={() => setStatusActiveModal(null)}
        header='Вы уверены, что хотите удалить книгу из каталога?'
        subheader='Удалив книгу из каталога, вы не сможете её восстановить'
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
    </>
  )
}
