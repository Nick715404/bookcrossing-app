import { Icon24MessageOutline, Icon24Message } from '@vkontakte/icons';
import { useState } from 'react';

export default function ToChat() {

  const [acitive, setActive] = useState<boolean>(false);

  const fakeHandleClick = () => {
    setActive(!acitive);
  }

  return (
    <div
      onClick={fakeHandleClick}
      className='to-chat-btn'>
      {acitive ? <Icon24Message fill='#99A2AD' /> : <Icon24MessageOutline fill='#99A2AD' /> }
    </div>
  )
}