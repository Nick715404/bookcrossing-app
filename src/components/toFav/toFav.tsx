import { vkBlueColor } from '../../constants/utils';
import { BookInFavIcon, PutBookToFavFX } from '../../api/server/favorites/favorites';
import { $user } from '../../store/user';

import { useUnit } from 'effector-react';
import { Icon28BookmarkCheckOutline, Icon28BookmarkOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { useState } from 'react';

type Props = {
  bookId: string
  isFav: string | null
  inFav?: boolean
}

export default function ToFav({ bookId, isFav, inFav }: Props) {
  const [fav, setFav] = useState<boolean>();
  const user = useUnit($user);

  const handleBookMove = async (e: any) => {
    e.preventDefault();
    const { userId } = user;
    await PutBookToFavFX({ bookId, userId });
  };

  return (
    <IconButton onClick={handleBookMove} className='to-shelf-btn'>
      {isFav !== null ? <Icon28BookmarkCheckOutline fill={vkBlueColor} />
        : <Icon28BookmarkOutline fill={vkBlueColor} />}
    </IconButton>
  )
}