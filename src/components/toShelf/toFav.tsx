import {
  Icon24BookmarkOutline,
  Icon24Bookmark,
  Icon24BookmarkCheckBadge
} from '@vkontakte/icons';
import { deleteBook } from '../../api/server/books/books';
import { useUnit } from 'effector-react';
import { $books } from '../../store/books';
import { useState } from 'react';

type Props = {
  id: string
}

export default function ToFav({ id }: Props) {

  const [acitive, setActive] = useState<boolean>(false);

  const books = useUnit($books);

  const handleDeleteBook = async (e: any) => {
    e.preventDefault();
    const isDelete = await deleteBook(id)

    if (isDelete === '200') {
      books.filter(el => el.id != id);
    }
    setActive(!acitive);
  }

  const fakeHandleClick = () => {
    setActive(!acitive);
  }

  return (
    <div
      className='to-shelf-btn'>
      {acitive ? <Icon24Bookmark fill='#99A2AD' /> : <Icon24BookmarkOutline fill='#99A2AD' />}
    </div>
  )
}