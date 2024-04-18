import { vkBlueColor } from '../../constants/utils';
import { PutBookToFavFX } from '../../api/server/favorites/favorites';
import { $user } from '../../store/user';

import { useUnit } from 'effector-react';
import { Icon28BookmarkCheckOutline, Icon28BookmarkOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { useState } from 'react';
import { getCurentBookFX } from '../../api/server/books/books';

type Props = {
  bookId: string
  isFav: string
  inFav?: string
}

export default function ToFav({ bookId, isFav, inFav }: Props) {
  const [active, setActive] = useState<boolean>();
  const user = useUnit($user);

  const handleBookMove = async (e: any) => {
    e.preventDefault();
    const { userId } = user;
    const response = await PutBookToFavFX({ bookId, userId });
    if (response.favourite !== '') {
      setActive(true);
      // const aw = await getCurentBookFX();
    }
  };

  return (
    <IconButton onClick={handleBookMove} className='to-shelf-btn'>
      {
        isFav !== '' && isFav !== null || active
          ?
          <Icon28BookmarkCheckOutline fill={vkBlueColor} />
          :
          <Icon28BookmarkOutline fill={vkBlueColor} />
      }
    </IconButton>
  )
}