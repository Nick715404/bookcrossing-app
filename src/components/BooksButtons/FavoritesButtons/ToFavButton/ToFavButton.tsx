import styles from '../../Buttons.module.scss';

import { ToFavButtonReverse } from '../..';
import { vkBlueColor } from '../../../../constants/utils';
import { Icon28BookmarkOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { useToFavButton } from './useToFavButton';

type TToFavButton = {
  bookId: string;
  isFav: boolean | undefined;
  ownerId?: number;
}

export function ToFavButton({ bookId, isFav }: TToFavButton) {
  const handleBookMove = useToFavButton({ bookId: bookId });

  if (isFav) {
    return <ToFavButtonReverse bookId={bookId} />
  };

  return (
    <IconButton onClick={handleBookMove} className={styles.buttonTop}>
      <Icon28BookmarkOutline fill={vkBlueColor} />
    </IconButton>
  )
}