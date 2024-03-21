import {
  Div,
  SimpleCell,
  Image,
  Text,
  SplitLayout,
  ModalRoot,
} from "@vkontakte/vkui"

import ToShelf from "../toShelf/toFav";
import ToChat from "../toChat/toChat";

import { IBook } from "../../interfaces/interface";
<<<<<<< HEAD
// import Modal from "../modal/Modal";
// import ModalImgBook from "../modal/modalImgbook/ModalImgBook";
=======
import { useState } from "react";
import Modal from "../modal/Modal";
import ModalImgBook from "../modal/modalImgbook/ModalImgBook";
>>>>>>> 65cfac3c623fb4633ce34251c084129ae010b54d
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

<<<<<<< HEAD
=======
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

>>>>>>> 65cfac3c623fb4633ce34251c084129ae010b54d
  const handleBook = () => {
    selectBook(book)
    setStatusActiveModal('modal');
  }

  return (
<<<<<<< HEAD
=======
    // <SplitLayout id={book.id} modal={modal}>
>>>>>>> 65cfac3c623fb4633ce34251c084129ae010b54d
    <SplitLayout>
      <Div className="book" id={book.id}>
        <SimpleCell className="book-wrapper" before={image} onClick={() => handleBook()}>
          <Text className="book-title" weight="1">
            {book.title}
          </Text>
          <Text className="book-author book-info">
            {book.author ? book.author : 'Автор не найден'}
          </Text>
<<<<<<< HEAD
          <Text className="book-quality book-info">
=======
          <Text className="book-quality">
>>>>>>> 65cfac3c623fb4633ce34251c084129ae010b54d
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