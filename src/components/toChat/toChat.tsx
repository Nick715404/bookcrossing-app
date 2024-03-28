import { vkBlueColor } from '../../constants/utils';
import { Icon28MessageOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { useState } from 'react';

export default function ToChat() {

  const [acitive, setActive] = useState<boolean>(false);

  const fakeHandleClick = () => {
    setActive(!acitive);
  }

  return (
    <IconButton
      onClick={fakeHandleClick}
      className='to-chat-btn'>
      {acitive ? <Icon28MessageOutline fill={vkBlueColor} /> : <Icon28MessageOutline fill={vkBlueColor} />}
    </IconButton>
  )
}