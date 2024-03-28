import { Icon24WriteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';

type Props = {}

export default function EditBook({ }: Props) {
  return (
    <IconButton className='edit-book'>
      <Icon24WriteOutline />
    </IconButton>
  )
}