import { vkBlueColor } from '../../constants/utils';
import { deleteBookFX } from '../../api/server/books/books';
import { IconButton } from '@vkontakte/vkui';
import { useEffect, useState } from 'react';
import { Icon28BookmarkOutline, Icon28BookmarkCheckOutline } from '@vkontakte/icons';
import { PutBookToFav } from '../../api/server/favorites/favorites';
import { useUnit } from 'effector-react';
import { $user } from '../../store/user';

type Props = {
  id: string
  isFavorite?: boolean
}

export default function ToFav({ id, isFavorite }: Props) {

  const [active, setActive] = useState<boolean>(false);
  const user = useUnit($user);

  const handleBookMove = () => {
    const { userId } = user;
    PutBookToFav(id, userId);
  };

  useEffect(() => {
    if (isFavorite) {
      setActive(true)
    }
  }, [isFavorite]);

  const handleClick = (e: any) => {
    e.preventDefault();
    handleBookMove();
    setActive(!active);
  }

  return (
    <IconButton
      onClick={handleClick}
      className='to-shelf-btn'>
      {active ? <Icon28BookmarkCheckOutline fill={vkBlueColor} /> : <Icon28BookmarkOutline fill={vkBlueColor} />}
    </IconButton>
  )
}