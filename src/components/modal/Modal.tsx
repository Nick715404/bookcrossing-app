import { ModalRoot, ModalPage, usePlatform, useAdaptivityConditionalRender, Image, SplitLayout, Div, Group, SplitCol, Text, Button, SimpleCell} from "@vkontakte/vkui";
import { IPassIdToModalPage } from "../../interfaces/interface"
import { useCallback, useState } from "react";
import { useUnit } from "effector-react";
import { $selectedBook } from "../../store/modalBook";
import '../../styles/panels/modal.scss';
import ModalImgBook from "./modalImgbook/ModalImgBook";

type Props = {
  activeModal?: string | null
}

/*export default function Modal({ activeModal }: Props) {
  return (
    <ModalRoot activeModal={activeModal}>
      <ModalPage id="info-book">
        ModalPage about book
      </ModalPage>
      <ModalPage></ModalPage>
    </ModalRoot>
  )
}*/
 
const Modal = ({id, changeActiveModal}: IPassIdToModalPage) => {
  const platform = usePlatform();
  const {sizeX} = useAdaptivityConditionalRender();
  const [expanded, setExpanded] = useState(false);
  const togle = useCallback(() => setExpanded(!expanded), [expanded]);

  const book = useUnit($selectedBook);

  const image = (
    <Image
      style={{ marginBottom: '0', marginTop: '0' }}
      className="book-img"
      size={200}
      borderRadius="m"
      src="https://fashionelite.com/wp-content/uploads/2016/09/1331144712_IMG_paris1.jpg" />
  )

  //const [activeModal, setActiveModal] = useState<string | null>(null);

  /*const changeActiveModal = (id: string, data?: number[]) => {
    setActiveModal(id);
  }*/

  const [activeModal, setActiveModal] = useState<string | null>(null);

  const changeActiveModalImgBook = (id: string | null) => {
    setActiveModal(id)
  }

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
      <ModalImgBook id={"modalImgBook"} changeActiveModal={changeActiveModal} />
    </ModalRoot>
  )

  return (
    <ModalPage id={id} onClose={() => changeActiveModal(null)} dynamicContentHeight={true}>
      <SplitLayout modal={modal}>
        <SplitCol animate={true}>
          <Div className="modalPage">
            <Group separator="hide">
              <Group separator="hide" >
                <SimpleCell className="bookImg" onClick={() => setActiveModal('modalImgBook')}>
                  {image}{book && book.imageId}
                </SimpleCell>
              </Group>
            </Group>

            <Group className="groupBookInformation" separator="hide">
              <Text weight="1" className="nameBook">
                Название:{book && book.title}
              </Text>
              <Text weight="3">
                Автор:{book && book.author}
              </Text>
            </Group>
            
            <Group separator="hide" className="groupBookInformation">
              <Text>
                Состояние:{book && book.state}
              </Text>
              <Text className="groupBookInformation">
                Категория:{book && book.categoryTitle}
              </Text>
              <Text className="groupBookInformation">
                ISBN:{book && book.isbn}
              </Text>
            </Group>

            <Group className="buttonBlock" separator="hide">
              <Button size="l" appearance="accent">
                Написать владельцу
              </Button>
            </Group>
          </Div>
        </SplitCol>
      </SplitLayout>
    </ModalPage>
  )
}

export default Modal;