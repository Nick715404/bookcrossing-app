import { ModalRoot, ModalPage, usePlatform, useAdaptivityConditionalRender, Image, SplitLayout, Div, Group, SplitCol, Text, Button, SimpleCell, CellButton } from "@vkontakte/vkui";
import { IPassIdToModalPage } from "../../interfaces/interface"
import { useCallback, useState } from "react";
import { useUnit } from "effector-react";
import { $selectedBook } from "../../store/modalBook";
import '../../styles/panels/modal.scss';
import ModalImgBook from "./modalImgbook/ModalImgBook";
import ModalBookStatusDescription from "./modalBookStatusDescriptions/ModalBookStatusDescription";
import { setStatusActiveModal } from "../../store/activeModal";

import "../../styles/panels/modal.scss"

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

const Modal = ({ id, changeActiveModal }: IPassIdToModalPage) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivityConditionalRender();
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

  //const [activeModal, setActiveModal] = useState<string | null>(null);

  // const changeActiveModalImgBook = (id: string | null) => {
  //   setActiveModal(id)
  // }

  // const modal = (
  //   <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
  //     <ModalImgBook id={"modalImgBook"} changeActiveModal={changeActiveModal} />
  //     <ModalBookStatusDescription id="statusDescription" changeActiveModal={changeActiveModal} />
  //   </ModalRoot>
  // )

  const statusBook = (
    <>
    {/*<SplitLayout modal={modal} style={{ paddingBottom: -10 }}>*/}
      {/*<SimpleCell  style={{padding: 0, paddingBottom: 0}}>*/}
      <CellButton onClick={() => setStatusActiveModal('statusDescription')} style={{ padding: 0, margin: 0 }}>
        {book && book.state}
      </CellButton>
      {/*</SimpleCell>*/}
    {/*</SplitLayout>*/}
    </>
  )

  // author
  // :
  // "Autor1"
  // categoryTitle
  // :
  // "<НАЗВАНИЕ КАТЕГОРИИЮ"
  // description
  // :
  // "string"
  // favourite
  // :
  // null
  // id
  // :
  // "cltuhfz1300038f6d8ejh57dc"
  // isbn
  // :
  // "123456789"
  // owner
  // :
  // null
  // releaseDate
  // :
  // "2024-03-16T19:30:17.751Z"
  // shelf
  // :
  // null
  // state
  // :
  // "quality1"
  // title
  // :
  // "book1"
    // imgUrls: ['http://link1.png', 'http://link1.png',]

  return (
    <ModalPage id={id} onClose={() => setStatusActiveModal(null)} dynamicContentHeight={true}>
      {/*<SplitLayout modal={modal}>*/}
      <SplitLayout>
        <SplitCol animate={true}>
          <Div className="modalPage">
            <Group separator="hide">
              <Group separator="hide" >
                <SimpleCell className="bookImg" onClick={() => setStatusActiveModal('modalImgBook')}>
                  <img src={book && book.imageId || ''} alt="" />
                  {/* {book && book.imageId} */}
                </SimpleCell>
              </Group>
            </Group>

            <Group className="groupBookInformation" separator="hide">
              <Text weight="1" className="nameBook">
                {book && book.title}
              </Text>
              <Text weight="3">
                {book && book.author}
              </Text>
            </Group>

            <Group separator="hide" className="groupBookInformation">
              <Text weight="3">
                {statusBook}
              </Text>
              <Text weight="3" className="groupBookInformation">
                {book && book.categoryTitle}
              </Text>
              <Text weight="3" className="groupBookInformation">
                {book && book.isbn}
              </Text>
            </Group>

            <Group className="buttonBlock" separator="hide">
              <Button size="l" appearance="accent">
                Написать владельцу
              </Button>
            </Group>
          </Div>
        </SplitCol>
      {/*</SplitLayout>*/}
      </SplitLayout>
    </ModalPage>
  )
}

export default Modal;