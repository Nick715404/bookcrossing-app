import { vkBlueColor } from '../../constants/utils';
import { Icon28MessageOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { useState } from 'react';

type TProps = {
  vkid: number | undefined;
}

export default function ToChat({ vkid }: TProps) {

  const [acitive, setActive] = useState<boolean>(false);

  const fakeHandleClick = () => {
    setActive(!acitive);
  }

  return (
    <IconButton
      href={`https://vk.com/im?sel=${vkid}`}
      onClick={fakeHandleClick}
      className='to-chat-btn'>
      {acitive ? <Icon28MessageOutline fill={vkBlueColor} /> : <Icon28MessageOutline fill={vkBlueColor} />}
    </IconButton>
  )
}