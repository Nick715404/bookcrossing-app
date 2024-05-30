import { vkBlueColor } from '../../../constants/utils';
import { $user } from '../../../store/user';

import { $favoriteStatus, PutBookInFavFX } from '../../../store/favorites';

import { putBookInFavorites } from '../../../api/server/books.query';

import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useUnit } from 'effector-react';
import { Icon28BookmarkOutline, Icon32DoneOutline } from '@vkontakte/icons';
import { IconButton, Snackbar } from '@vkontakte/vkui';
import { CheckBookInFavPipeFX } from '../../../utilities/category/category.utils';
import { setSnackbar } from '../../../store/activeModal';
import { ToFavButtonReverse } from './ToFavButtonReverse';

type Props = {
  bookId: string;
  // isFav: string;
  isFav: boolean | undefined;
  ownerId: number;
}

export function ToFavButton({ bookId, isFav, ownerId }: Props) {
  const [user] = useUnit([$user]);
  const client = useQueryClient();
  const { userId } = user;

  const { mutate: move, isSuccess, data } = useMutation({
    mutationKey: ['put', 'favorites'],
    mutationFn: () => putBookInFavorites(bookId, userId),
    onSuccess: () => {
      setSnackbar('fav-adding')
      client.invalidateQueries({
        queryKey: [
          ['books all', 'books favorites'],
        ]
      });
    },
  });

  useEffect(() => {
    if (isSuccess) PutBookInFavFX(data);
  }, [isSuccess, data]);

  const handleBookMove = async (e: any) => {
    e.preventDefault();
    move();
  };

  useEffect(() => {
    CheckBookInFavPipeFX(bookId)
  }, [isSuccess]);

  if (isFav) {
    return (
      <>
        <ToFavButtonReverse bookId={bookId} />
      </>
    )
  }

  return (
    <>
      <IconButton onClick={handleBookMove} className='to-shelf-btn'>
        <Icon28BookmarkOutline fill={vkBlueColor} />
      </IconButton>
    </>
  )
}