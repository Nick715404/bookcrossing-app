import { vkBlueColor } from '../../constants/utils';
import { deleteBook } from '../../api/server/books/books';
import { IconButton } from '@vkontakte/vkui';
import { useEffect, useState } from 'react';
import { Icon28BookmarkOutline, Icon28BookmarkCheckOutline } from '@vkontakte/icons';

type Props = {
  id: string
  isFavorite?: boolean
}

export default function ToFav({ id, isFavorite }: Props) {

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (isFavorite) {
      setActive(true)
    }
  }, [isFavorite]);

  const fakeHandleClick = (e: any) => {
    e.preventDefault();
    setActive(!active);
  }
  // - Функция удаляет книги
  const deleteButtonHandler = async () => {
    deleteBook(id);
  };

  return (
    <IconButton
      onClick={fakeHandleClick}
      className='to-shelf-btn'>
      {active ? <Icon28BookmarkCheckOutline fill={vkBlueColor} /> : <Icon28BookmarkOutline fill={vkBlueColor} />}
    </IconButton>
  )
}