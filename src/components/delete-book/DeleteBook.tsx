import { vkBlueColor } from '../../constants/utils';
import { setStatusActiveModal } from '../../store/activeModal';
import { GetCurrentBookIdFX } from '../../store/modalBook';

import { Icon28DeleteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';

type Props = {
  bookId: string
}

export default function DeleteBook({ bookId }: Props) {

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