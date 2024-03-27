import { Icon24DeleteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';

type Props = {}

export default function DeleteBook({}: Props) {
  return (
    <IconButton>
      <Icon24DeleteOutline className='delete-book-btn' />
    </IconButton>
  )
}