import { IconButton } from '@vkontakte/vkui';
import { Icon28WriteOutline } from '@vkontakte/icons';
import { vkBlueColor } from '../../constants/utils';

type Props = {}

export default function EditBook({ }: Props) {
  return (
    <IconButton className='edit-book'>
      <Icon28WriteOutline fill={vkBlueColor} />
    </IconButton>
  )
} 