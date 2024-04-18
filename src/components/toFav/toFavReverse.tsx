import { vkBlueColor } from '../../constants/utils';
import { RemoveFromFavFX } from '../../api/server/favorites/favorites';
import { $user } from '../../store/user';

import { EditArrayFX } from '../../store/favorites';

import { useUnit } from 'effector-react';
import { Icon28BookmarkCheckOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';

type Props = {
  bookId: string;
}

function ToFavReverse({ bookId }: Props) {
  const user = useUnit($user);

  const handleBookMove = async (e: any) => {
    e.preventDefault();
    const { message, book } = await RemoveFromFavFX({ bookId: bookId, vkId: user.vkId })
    if (message !== '') {
      EditArrayFX({ id: book.id, favourite: book.favourite })
    }
  };

  return (
    <IconButton onClick={handleBookMove} className='to-shelf-btn'>
      <Icon28BookmarkCheckOutline fill={vkBlueColor} />
    </IconButton>
  )
}

export { ToFavReverse };