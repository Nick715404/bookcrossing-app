

import { Icon28DeleteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { setStatusActiveModal } from '../../store/activeModal';
import { GetCurrentBookIdFX } from '../../store/modalBook';
import { vkBlueColor } from '../../constants/utils';

type Props = {
  bookId: string
}

export function DeleteBookButton({ bookId }: Props) {

  const handleClick = () => {
    setStatusActiveModal("deleteBook");
    GetCurrentBookIdFX(bookId);
  };

  return (
    <>
      <IconButton onClick={handleClick} className='delete-book-btn'>
        <Icon28DeleteOutline fill={vkBlueColor} />
      </IconButton>
    </>
  )
}