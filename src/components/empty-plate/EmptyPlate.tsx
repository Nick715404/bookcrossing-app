import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router"
import { generateWrapForString } from "../../utilities/empty-plate/empty-plate.utils"

import { useMemo } from "react"
import { Button, Div, Header, Text } from "@vkontakte/vkui"
import { showSnackbarFX } from "../../store/states"
import { Icon28CheckCircleOutline } from "@vkontakte/icons"

type Props = {
  icon: React.ReactNode
  title: string
  text?: string
  label: string
  location: string
}

export default function EmptyPlate({ icon, title, text, label, location }: Props) {

  const navigator = useRouteNavigator();

  const newTitle = useMemo(() => {
    return generateWrapForString(title)
  }, [title]);

  const handleClick = () => {
    showSnackbarFX({
      text: 'Книга успешно удалена!',
      icon: <Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />,
      duration: 1000, // 4 секунды
    });
    // navigator.push(`/${location}`);
  }

  return (
    <Div className="empty-plate-box">
      <>{icon}</>
      <Header mode="primary">
        {newTitle}
      </Header>
      <Text style={{ fontSize: '16px', maxWidth: '340px' }}>{text}</Text>
      <Button
        onClick={handleClick}
        style={{ margin: '26px 0px' }}
        size="m">
        {label}
      </Button>
    </Div>
  )
}