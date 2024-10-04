import { Div, Button } from "@vkontakte/vkui";
import { useState } from "react";
import bridge from "@vkontakte/vk-bridge";

type BookActionsProps = {
  ownerId: number;
};

export default function BookActions ({ ownerId }: BookActionsProps){
  const [acitive, setActive] = useState<boolean>(false);

  const HandleClick = () => {
    setActive(!acitive);

    if (!ownerId) {
      console.warn('ID пользователя не определён');
      return;
    }

    // Определяем, в каком контексте запущено приложение
    bridge.send('VKWebAppGetClientVersion')
      .then(({ platform }) => {
        if (['android', 'ios', 'web_desktop'].includes(platform)) {
          // Открываем профиль через VKWebAppShowProfile в мобильном или десктопном приложении
          (bridge.send as any)('VKWebAppShowProfile', { user_id: ownerId })
            .catch((error: unknown) => {
              console.error('Ошибка при открытии профиля пользователя в приложении:', error);
            });
        } else if (platform === 'web') {
          // Открываем профиль в новой вкладке, если приложение работает в браузере
          window.open(`https://vk.com/id${ownerId}`, '_blank');
        } else {
          console.warn('Неизвестная платформа:', platform);
        }
      })
      .catch((error: unknown) => {
        console.error('Ошибка при получении версии клиента ВК:', error);
      });
  }
  
  return (
    <Div style={{ marginTop: '40px' }}>
      <Button onClick={HandleClick} size="l" stretched>
        Написать владельцу
      </Button>
    </Div>
  )
}
