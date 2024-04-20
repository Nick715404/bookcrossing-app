import { vkBlueColor } from '../../constants/utils';
import { PutBookToFavFX } from '../../api/server/favorites/favorites';
import { $user } from '../../store/user';

import { useUnit } from 'effector-react';
import { Icon28BookmarkCheckOutline, Icon28BookmarkOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { useState } from 'react';
import { getCurentBookFX } from '../../api/server/books/books';
import { $favoritesStatus, SwitchFavoritesStatus } from '../../store/favorites';
import { ChangeArrayFX } from '../../store/books';
import { ToFavReverse } from './toFavReverse';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { putBookInFavorites } from '../../api/server/books/books.query';

type Props = {
  bookId: string
  isFav: string
}

export default function ToFav({ bookId, isFav }: Props) {
  const [user, status] = useUnit([$user, $favoritesStatus]);
  const { userId } = user;
  const client = useQueryClient();

  const { mutate: moove } = useMutation({
    mutationKey: ['put', 'favorites'],
    mutationFn: () => putBookInFavorites(bookId, userId),
    onMutate: () => {
      client.invalidateQueries({
        queryKey: [
          ['books'],
        ]
      })
    },
  })

  const handleBookMove = async (e: any) => {
    e.preventDefault();
    moove();
  };

  if (isFav !== '' && isFav !== null) {
    return (
      <ToFavReverse bookId={bookId} />
    )
  }

  return (
    <IconButton onClick={handleBookMove} className='to-shelf-btn'>
      <Icon28BookmarkOutline fill={vkBlueColor} />
    </IconButton>
  )
}