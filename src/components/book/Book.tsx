import ToChat from "../toChat/toChat";

import { IBook } from "../../interfaces/interface";
import { selectBookFX } from "../../store/modalBook";

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
import { useUnit } from "effector-react";
import { $status } from "../../store/books";

type Props = {
  book: IBook
  afterIcon: React.ReactNode | null
  beforeIcon: React.ReactNode | null
}

export default function Book({ book, afterIcon, beforeIcon }: Props) {
  const navigator = useRouteNavigator();
  const { panel: activePanel } = useActiveVkuiLocation();
  const [path, setPath] = useState<string>('');

  const success = status === 'success'
  const error = status === 'error'

  useEffect(() => {
    async function getFiles() {
      const images = await getBookImage(book.id);
      if (!images) return;
      setPath(images.path);
    }
    getFiles();
  }, []);

  const image = (
    <Image
      size={96}
      borderRadius="m"
      className="book-img"
      src={'http://localhost:3100/' + path}
      style={{ marginBottom: '0', marginTop: '0' }}
    />
  )

  const handleChooseBook = () => {
    selectBookFX(book)
    navigator.push('/book');
  }

  return (
    <SplitLayout>
      <Div className="book" id={book.id}>
        <SimpleCell
          className="book-wrapper"
          before={image}
          selected={activePanel === 'book-panel'}
          onClick={handleChooseBook}
        >
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