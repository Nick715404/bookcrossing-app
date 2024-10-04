import { vkBlueColor } from '../../constants/utils';
import { Icon28MessageOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { useState } from 'react';
import bridge from '@vkontakte/vk-bridge';

type TProps = {
  vkid: number | undefined;
}

export default function ToChat({ vkid }: TProps) {

  const [acitive, setActive] = useState<boolean>(false);

  const HandleClick = () => {
    setActive(!acitive);

    if (!vkid) {
      console.warn('ID пользователя не определён');
      return;
    }

    // Определяем, в каком контексте запущено приложение
    bridge.send('VKWebAppGetClientVersion')
      .then(({ platform }) => {
        if (['android', 'ios', 'web_desktop'].includes(platform)) {
          // Открываем профиль через VKWebAppShowProfile в мобильном или десктопном приложении
          (bridge.send as any)('VKWebAppShowProfile', { user_id: vkid })
            .catch((error: unknown) => {
              console.error('Ошибка при открытии профиля пользователя в приложении:', error);
            });
        } else if (platform === 'web') {
          // Открываем профиль в новой вкладке, если приложение работает в браузере
          window.open(`https://vk.com/id${vkid}`, '_blank');
        } else {
          console.warn('Неизвестная платформа:', platform);
        }
      })
      .catch((error: unknown) => {
        console.error('Ошибка при получении версии клиента ВК:', error);
      });
  };
  console.log(vkid)

  return (
    <IconButton
      //href={`https://vk.com/id477918454`}
      onClick={HandleClick}
      className='to-chat-btn'>
      {acitive ? <Icon28MessageOutline fill={vkBlueColor} /> : <Icon28MessageOutline fill={vkBlueColor} />}
    </IconButton>
  )
}