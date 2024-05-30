import styles from './BooksSkeletons.module.scss';

import { Card, Div, SimpleCell } from "@vkontakte/vkui";

export function BookSkeletonItem() {
  return (
    <Card className={styles.card}>
      <Div className={styles.book}>
        <Div className={`${styles.img} ${styles.loading}`} />
        <Div className={styles.content}>
          <Div className={`${styles.title} ${styles.loading}`} />
          <Div className={`${styles.medium} ${styles.loading}`} />
          <Div className={`${styles.large} ${styles.loading}`} />
          <Div className={`${styles.small} ${styles.loading}`} />
        </Div>
      </Div>
    </Card>
  )
}