import { vkBlueColor } from '../../constants/utils';
import { PutBookToFavFX } from '../../api/server/favorites/favorites';
import { $user } from '../../store/user';

import { useUnit } from 'effector-react';
import { Icon28BookmarkCheckOutline, Icon28BookmarkOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { useState } from 'react';

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
    await PutBookToFavFX({ bookId, userId });
    setActive(true);
  };

  return (
    <IconButton onClick={handleBookMove} className='to-shelf-btn'>
      {isFav !== '' && isFav !== null ?
        <Icon28BookmarkCheckOutline fill={vkBlueColor} />
        : <Icon28BookmarkOutline fill={vkBlueColor} />
      }
    </IconButton>
  )
}