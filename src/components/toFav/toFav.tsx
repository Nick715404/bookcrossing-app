import { vkBlueColor } from '../../constants/utils';
import { BookInFavIcon, PutBookToFavFX } from '../../api/server/favorites/favorites';
import { $user } from '../../store/user';

import { useEffect, useState } from 'react';
import { useUnit } from 'effector-react';
import {
  Icon28BookmarkOutline,
  Icon28BookmarkCheckOutline
} from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';

type Props = {
  id: string
  isFavorite?: boolean
  fav?: string
}

export default function ToFav({ id, isFavorite, fav }: Props) {

  const user = useUnit($user);

  const handleBookMove = async (e: any) => {
    e.preventDefault();
    const { userId } = user;
    const bookId = id;
    const book = await PutBookToFavFX({ bookId, userId });
    BookInFavIcon(book.favourite);
  };

  // - Сделать проверку на кнопочку

  return (
    <IconButton
      onClick={handleBookMove}
      className='to-shelf-btn'>
      {/* <Icon28BookmarkCheckOutline fill={vkBlueColor} /> */}
      <Icon28BookmarkOutline fill={vkBlueColor} />
    </IconButton>
  )
}