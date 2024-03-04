import { ModalRoot, ModalPage } from "@vkontakte/vkui"

type Props = {
  activeModal?: string | null
}

export default function Modal({ activeModal }: Props) {
  return (
    <ModalRoot activeModal={activeModal}>
      <ModalPage id="info-book">
        ModalPage about book
      </ModalPage>
      <ModalPage></ModalPage>
    </ModalRoot>
  )
}