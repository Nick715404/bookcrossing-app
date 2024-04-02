import { vkBlueColor } from '../../constants/utils';
import { deleteBookFX } from '../../api/server/books/books';

import { Icon28DeleteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';

type Props = {
  bookId: string
}

export default function DeleteBook({ bookId }: Props) {

  const handleDeleteBook = async () => {
    deleteBookFX(bookId);
  };

  return (
    <IconButton onClick={handleDeleteBook} className='delete-book-btn'>
      <Icon28DeleteOutline fill={vkBlueColor} />
    </IconButton>
  )
}