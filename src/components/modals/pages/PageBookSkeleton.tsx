import styles from './Styles.module.scss';
import { Div, Group, Separator, Text } from "@vkontakte/vkui";

type Props = {}

const PageBookSkeleton = (props: Props) => {
  return (
    <Div>
      <Group separator="hide" className={styles.imgBox}>
        <Div className={`${styles.img} loading`} />
      </Group>
      <Div className='book-top-row'>
        <Text weight="1" className={`${styles.textTitle} loading`}></Text>
        <Div className={`book-top-row__btn loading ${styles.icon}`}></Div>
      </Div>
      <Text weight="3" className={`${styles.text} ${styles.wide} loading`}></Text>
      <Text weight="3" className={`${styles.small} ${styles.text} loading`}></Text>
      <Text weight="3" className={`${styles.medium} ${styles.text} loading`}></Text>
      <Separator style={{ padding: 10, marginBottom: 10 }} />
      <Div style={{ display: 'flex', alignItems: 'center', padding: '0', marginTop: '-10px' }}>
        <Text className={`${styles.medium} ${styles.text} loading`}></Text>
      </Div>
      <Text className={`${styles.text} ${styles.ultraWide} loading`}></Text>
      <Text className={`${styles.medium} ${styles.text} loading`}></Text>
    </Div>
  )
}

export { PageBookSkeleton };