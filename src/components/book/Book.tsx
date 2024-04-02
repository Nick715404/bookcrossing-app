import { IBook } from "../../interfaces/interface";
import { selectBook } from "../../store/modalBook";
import { setStatusActiveModal } from "../../store/activeModal";

import {
  Div,
  SimpleCell,
  Image,
  Text,
  SplitLayout,
} from "@vkontakte/vkui"
import { useActiveVkuiLocation, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { useEffect, useState } from "react";
import { getBookImage } from "../../api/server/images/image";

type Props = {
  book: IBook
  afterIcon: React.ReactNode | null
  beforeIcon: React.ReactNode | null
}

// - Поменять список выводящихся полей

export default function Book({ book, afterIcon, beforeIcon }: Props) {
  const navigator = useRouteNavigator();
  const { panel: activePanel } = useActiveVkuiLocation();

  const [path, setPath] = useState<string>('');

  useEffect(() => {
    async function getFiles() {
      const images = await getBookImage(book.id);
      setPath(images.path);
    }
    getFiles();
  }, []);

  const image = (
    <Image
      style={{ marginBottom: '0', marginTop: '0' }}
      className="book-img"
      size={96}
      borderRadius="m"
      src={'http://localhost:3100/' + path} />
  )

  const handleBook = () => {
    selectBook(book)
    setStatusActiveModal('modal');
    navigator.push('/pageBook')
  }

  return (
    <SplitLayout>
      <Div className="book" id={book.id}>
        <SimpleCell className="book-wrapper" before={image} selected={activePanel === 'book-panel'}
          onClick={handleBook}>
          <Text className="book-title" weight="1">
            {book.title}
          </Text>
          <Text className="book-author book-info">
            {book.author ? book.author : 'Автор не найден'}
          </Text>
          <Text className="book-quality book-info">
            {book.state ? book.state : "не найдено"}
          </Text>
          <Text className="book-genre book-info">
            {book.categoryTitle ? book.categoryTitle : 'Нет жанра'}
          </Text>
        </SimpleCell>
      </Div >
      <>{afterIcon}</>
      <>{beforeIcon}</>
    </SplitLayout >
  )
}