import { vkBlueColor } from '../../constants/utils';
import { $user } from '../../store/user';

import { DeleteBookFromFavPipeFX, EditArrayFX } from '../../store/favorites';
import { removeFromFav } from '../../api/server/favorites/favorites.query';

import { useUnit } from 'effector-react';
import { Icon28BookmarkCheckOutline, Icon56DeleteOutline } from '@vkontakte/icons';
import { IconButton, Snackbar } from '@vkontakte/vkui';
import { useMutation, useQueryClient } from 'react-query';
import { useEffect, useState } from 'react';
import { setSnackbar } from '../../store/activeModal';

type Props = {
  bookId: string;
}

function ToFavReverse({ bookId }: Props) {
  const user = useUnit($user);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const client = useQueryClient();

  const { data, isSuccess, mutate: remove } = useMutation({
    mutationKey: ['delete', 'favorites'],
    mutationFn: () => removeFromFav({ bookId: bookId, vkId: user.vkId }),
    onSuccess: () => {
      setSnackbar('fav-remove')
      client.invalidateQueries({
        queryKey: ['books all', 'books favorites'],
      })
      setShowSnackbar(true)
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setShowSnackbar(true);
      DeleteBookFromFavPipeFX(data);
    }
  }, [isSuccess]);

  const handleBookMove = async (e: any) => {
    e.preventDefault();
    remove();
    if (data && data.message !== '') {
      EditArrayFX({ id: data.book.id, favourite: data.book.favourite });
    }
  };

  return (
    <>
      <IconButton onClick={handleBookMove} className='to-shelf-btn'>
        <Icon28BookmarkCheckOutline fill={vkBlueColor} />
      </IconButton>
      {showSnackbar && (
        <Snackbar
          onClose={() => setShowSnackbar(false)}
          before={<Icon56DeleteOutline width={32} height={32} />}
          duration={3000}
        >
          Книга успешно удалена из избранного!
        </Snackbar>
      )}
    </>
  );
}

export { ToFavReverse };
