import styles from './Buttons.module.scss';

import { vkBlueColor } from '../../constants/utils';
import { GetCurrentBookIdFX } from '../../store/modalBook';
import { setStatusActiveModal } from '../../store/activeModal';
import { Icon28DeleteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';

type DeleteBookButtonProps = { bookId: string, };

export function DeleteBookButton({ bookId }: DeleteBookButtonProps) {
  const handleClick = () => {
    setStatusActiveModal("deleteBook");
    GetCurrentBookIdFX(bookId);
  };

  return (
    <IconButton onClick={handleClick} className={styles.buttonBottom}>
      <Icon28DeleteOutline fill={vkBlueColor} />
    </IconButton>
  );
};