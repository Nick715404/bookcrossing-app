import { Button, ButtonGroup, Div, ModalCard } from "@vkontakte/vkui"
import { setStatusActiveModal } from "../../../store/activeModal"


type Props = {
  id: string | undefined
}

export default function ModalAcceptDeleteV2({ id }: Props) {
  return (
    <ModalCard
      id={id}
      onClose={() => setStatusActiveModal(null)}
      header='Вы уверены, что хотите удалить книгу из каталога?'
      subheader='Удалив книгу из каталога, вы не сможете её востановить'
      actions={
        <Div>
          <ButtonGroup mode="vertical" stretched>
            <Button
              key="join"
              size="l"
              mode="primary"
              stretched
              onClick={() => setStatusActiveModal(null)}
            >
              Отменить
            </Button>
            <Button
              key="copy"
              size="l"
              mode="secondary"
              stretched
              onClick={() => setStatusActiveModal(null)}
            >
              Удалить
            </Button>
          </ButtonGroup>
        </Div>
      }
    >

    </ModalCard>
  )
}