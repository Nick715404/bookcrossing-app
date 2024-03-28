import { Icon28DeleteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { vkBlueColor } from '../../constants/utils';

type Props = {}

export default function DeleteBook({ }: Props) {
  return (
    <IconButton className='delete-book-btn'>
      <Icon28DeleteOutline fill={vkBlueColor} />
    </IconButton>
  )
}