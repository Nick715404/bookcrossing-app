import { Button, Div, Header, Text } from "@vkontakte/vkui"
import { generateWrapForString } from "../../utilities/empty-plate/empty-plate.utils"
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router"
import { useMemo } from "react"

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

  return (
    <Div className="empty-plate-box">
      <>{icon}</>
      <Header mode="primary">
        {newTitle}
      </Header>
      <Text style={{ fontSize: '16px', maxWidth: '340px' }}>{text}</Text>
      <Button
        onClick={() => navigator.push(`/${location}`)}
        style={{ margin: '26px 0px' }}
        size="m">
        {label}
      </Button>
    </Div>
  )
}