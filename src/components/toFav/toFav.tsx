import { vkBlueColor } from '../../constants/utils';
import { $user } from '../../store/user';

import { $favoriteStatus, PutBookInFavFX } from '../../store/favorites';
import { ToFavReverse } from './toFavReverse';
import { putBookInFavorites } from '../../api/server/books/books.query';

import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useUnit } from 'effector-react';
import { Icon28BookmarkOutline, Icon32DoneOutline } from '@vkontakte/icons';
import { IconButton, Snackbar } from '@vkontakte/vkui';
import { CheckBookInFavPipeFX } from '../../utilities/category/category.utils';

type Props = {
  bookId: string;
  // isFav: string;
  isFav: boolean;
  ownerId: number;
}

export default function ToFav({ bookId, isFav, ownerId }: Props) {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [user, status] = useUnit([$user, $favoriteStatus]);
  const client = useQueryClient();
  const { userId } = user;

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

  useEffect(() => {
    CheckBookInFavPipeFX(bookId)
  }, [isSuccess]);

  if (isFav) {
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
    <>
      <IconButton onClick={handleBookMove} className='to-shelf-btn'>
        <Icon28BookmarkOutline fill={vkBlueColor} />
      </IconButton>
    </>
  )
}