import { Icon28DeleteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { vkBlueColor } from '../../constants/utils';
import { deleteBook } from '../../api/server/books/books';

type Props = {
  bookId: string
}

export default function DeleteBook({ bookId }: Props) {

  const handleDeleteBook = async () => {
    deleteBook(bookId);
  };

  return (
    <IconButton onClick={handleDeleteBook} className='delete-book-btn'>
      <Icon28DeleteOutline fill={vkBlueColor} />
    </IconButton>
  )
}