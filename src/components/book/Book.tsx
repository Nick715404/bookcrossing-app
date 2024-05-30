import styles from './Book.module.scss';

import { IBook } from "../../interfaces/interface";
import { selectBookFX } from "../../store/modalBook";

import { useActiveVkuiLocation, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import {
  Div,
  SimpleCell,
  Text,
  SplitLayout,
  Card,
  CardGrid,
  ContentCard,
} from "@vkontakte/vkui";
import { CustomImage } from "../CustomImage/CustomImage";
import { BookContent } from './BookContent';

type Props = {
  book: IBook
  afterIcon: React.ReactNode | null
  beforeIcon: React.ReactNode | null
}

export default function Book({ book, afterIcon, beforeIcon }: Props) {
  const navigator = useRouteNavigator();
  // const { panel: activePanel } = useActiveVkuiLocation();

  const handleChooseBook = () => {
    selectBookFX(book)
    navigator.push(`/book/${book.id}`);
  };

  return (
    <Card>
      <SimpleCell>
        <Div className={styles.book}>
          <CustomImage bookId={book.id} />
          <BookContent book={book} />
        </Div>
      </SimpleCell>
    </Card>
  )
}
