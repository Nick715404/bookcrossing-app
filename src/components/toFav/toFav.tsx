import {
  Icon24BookmarkOutline,
  Icon24Bookmark,
  Icon24BookmarkCheckBadge
} from '@vkontakte/icons';
import { useState } from 'react';
import { deleteBook } from '../../api/server/books/books';
import { IconButton } from '@vkontakte/vkui';

type Props = {
  id: string
}

export default function ToFav({ id }: Props) {

  const [acitive, setActive] = useState<boolean>(false);

  const fakeHandleClick = (e: any) => {
    e.preventDefault();
    setActive(!acitive);
  }
  // - Функция удаляет книги
  const deleteButtonHandler = async () => {
    deleteBook(id);
  };

  return (
    <IconButton
      onClick={fakeHandleClick}
      className='to-shelf-btn'>
      {acitive ? <Icon24Bookmark fill='#99A2AD' /> : <Icon24BookmarkOutline fill='#99A2AD' />}
    </IconButton>
  )
}