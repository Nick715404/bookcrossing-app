import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { vkBlueColor } from '../../constants/utils';

import { Icon28WriteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { getCurentBookFX } from '../../api/server/books.query';

type Props = {
  bookId: string
}

export function EditBookButton({ bookId }: Props) {

  const navigator = useRouteNavigator()

  const handleClick = () => {
    navigator.push(`/${bookId}`)
    getCurentBookFX(bookId);
  };

  return (
    <IconButton onClick={handleClick} className='edit-book'>
      <Icon28WriteOutline fill={vkBlueColor} />
    </IconButton>
  )
} 