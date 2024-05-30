import styles from './Book.module.scss';

import { IBook } from "../../interfaces/interface";
import { selectBookFX } from "../../store/modalBook";

import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { CustomImage } from "../CustomImage/CustomImage";
import { BookContent } from './BookContent';
import { Div, SimpleCell, Card, } from "@vkontakte/vkui";
import { Fragment } from 'react/jsx-runtime';

type TBookProps = {
  book: IBook
  afterIcon: React.ReactNode | null
  beforeIcon: React.ReactNode | null
}

export function Book({ book, afterIcon, beforeIcon }: TBookProps) {
  const navigator = useRouteNavigator();

  const handleChooseBook = () => {
    selectBookFX(book)
    navigator.push(`/book/${book.id}`);
  };

  return (
    <Card>
      <SimpleCell onClick={handleChooseBook}>
        <Div className={styles.book}>
          <CustomImage bookId={book.id} />
          <BookContent book={book} />
        </Div>
      </SimpleCell>
      <Fragment>{afterIcon}</Fragment>
      <Fragment>{beforeIcon}</Fragment>
    </Card>
  );
};