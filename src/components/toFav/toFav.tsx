import { vkBlueColor } from '../../constants/utils';
import { $user } from '../../store/user';

import { $favoritesStatus, PutBookInFavFX } from '../../store/favorites';
import { ToFavReverse } from './toFavReverse';
import { putBookInFavorites } from '../../api/server/books/books.query';

import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useUnit } from 'effector-react';
import { Icon28BookmarkOutline, Icon32DoneOutline } from '@vkontakte/icons';
import { IconButton, Snackbar } from '@vkontakte/vkui';

type Props = {
  bookId: string
  isFav: string
}

export default function ToFav({ bookId, isFav }: Props) {
  const [user, status] = useUnit([$user, $favoritesStatus]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const { userId } = user;
  const client = useQueryClient();

  const { mutate: move, isSuccess, data } = useMutation({
    mutationKey: ['put', 'favorites'],
    mutationFn: () => putBookInFavorites(bookId, userId),
    onSuccess: () => {
      setShowSnackbar(true);
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

  if (isFav !== '' && isFav !== null || isSuccess) {
    return (
      <>
        <ToFavReverse bookId={bookId} />
        {
          showSnackbar &&
          <Snackbar
            onClose={() => setShowSnackbar(false)}
            before={<Icon32DoneOutline fill='#11d86b' />}
            duration={3000}
          >
            Книга успешно добавлена в избранное!
          </Snackbar>
        }
      </>
    )
  }

  return (
    <IconButton onClick={handleBookMove} className='to-shelf-btn'>
      <Icon28BookmarkOutline fill={vkBlueColor} />
    </IconButton>
  )
}