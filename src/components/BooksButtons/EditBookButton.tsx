import styles from './Buttons.module.scss';

import { vkBlueColor } from '../../constants/utils';
import { getCurentBookFX } from '../../api/server/books.query';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon28WriteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';

type Props = { bookId: string, };

export function EditBookButton({ bookId }: Props) {
  const navigator = useRouteNavigator()

  const handleClick = () => {
    navigator.push(`/${bookId}`)
    getCurentBookFX(bookId);
  };

  return (
    <IconButton onClick={handleClick} className={styles.buttonTop}>
      <Icon28WriteOutline fill={vkBlueColor} />
    </IconButton>
  );
} ;