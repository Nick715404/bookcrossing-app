import { vkBlueColor } from '../../constants/utils';
import { PutBookToFavFX } from '../../api/server/favorites/favorites';
import { $user } from '../../store/user';

import { useUnit } from 'effector-react';
import { Icon28BookmarkCheckOutline, Icon28BookmarkOutline, Icon32DoneOutline, Icon56DeleteOutline } from '@vkontakte/icons';
import { IconButton, Snackbar } from '@vkontakte/vkui';
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
  const [showSnackbar, setShowSnackbar] = useState(false);
  const { userId } = user;
  const client = useQueryClient();

  const { mutate: move, isSuccess } = useMutation({
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
  })

  const handleBookMove = async (e: any) => {
    e.preventDefault();
    move();
  };

  if (isFav !== '' && isFav !== null || isSuccess) {
    return (
      <>
        <ToFavReverse bookId={bookId} />
        {showSnackbar && (
          <Snackbar
            onClose={() => setShowSnackbar(false)}
            before={<Icon32DoneOutline fill='#11d86b' />}
            duration={3000}
          >
            Книга успешно добавлена из избранное!
          </Snackbar>
        )}
      </>
    )
  }

  return (
    <IconButton onClick={handleBookMove} className='to-shelf-btn'>
      <Icon28BookmarkOutline fill={vkBlueColor} />
    </IconButton>
  )
}