import {
  Div,
  SimpleCell,
  Image,
  Text,
  SplitLayout,
  ModalRoot,
} from "@vkontakte/vkui"

import ToShelf from "../toShelf/toShelf";
import ToChat from "../toChat/toChat";

import { IBook } from "../../interfaces/interface";
import { useState } from "react";
import Modal from "../modal/Modal";
import ModalImgBook from "../modal/modalImgbook/ModalImgBook";
import { selectBook } from "../../store/modalBook";
import { setStatusActiveModal } from "../../store/activeModal";

type Props = {
  book: IBook
}

export default function Book({ book }: Props) {

  const image = (
    <Image
      style={{ marginBottom: '0', marginTop: '0' }}
      className="book-img"
      size={96}
      borderRadius="m"
      src="/img/genres/genre1.jpg" />
  )

  // const [activeModal, setActiveModal] = useState<string | null>(null);

  // const changeActiveModal = (id: string | null) => {
  //   setActiveModal(id);
  // }

  // const modal = (
  //   <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
  //     <Modal id={"modal"} changeActiveModal={changeActiveModal} />
  //     <ModalImgBook id={"modalImgBook"} changeActiveModal={changeActiveModal} />
  //   </ModalRoot>
  // )

  const handleBook = () => {
    selectBook(book)
    setStatusActiveModal('modal');
  }

  return (
    // <SplitLayout id={book.id} modal={modal}>
    <SplitLayout>
      <Div className="book" id={book.id}>
        <SimpleCell className="book-wrapper" before={image} onClick={() => handleBook()}>
          <Text className="book-title" weight="1">
            {book.title}
          </Text>
          <Text className="book-author book-info">
            {book.author ? book.author : 'Автор не найден'}
          </Text>
          <Text className="book-quality">
            {book.state ? book.state : "не найдено"}
          </Text>
          <Text className="book-genre book-info">
            {book.categoryTitle ? book.categoryTitle : 'Нет жанра'}
          </Text>
        </SimpleCell>
      </Div >
      <ToShelf id={book.id} />
      <ToChat />
    </SplitLayout >
  )
}