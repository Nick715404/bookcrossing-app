import styles from './Book.module.scss';

import { IBook } from "../../interfaces/interface";
import { Div, Text } from "@vkontakte/vkui";

type Props = { book: IBook };

export function BookContent({ book }: Props) {
  return (
    <Div className={styles.bookContent}>
      <Text className={styles.title}>{book.title}</Text>
      <Text className={styles.author}>{book.author}</Text>
      <Text className={styles.info}>{book.categoryTitle}</Text>
      <Text className={styles.info}>{book.state}</Text>
    </Div>
  );
};