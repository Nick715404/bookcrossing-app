import { Group, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui"
import SortedBookList from "../../components/sortedBookList/SortedBookList"
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router"


type Props = {
  id: string
}

export default function SingleCategory({ id }: Props) {
  const nav = useRouteNavigator();

  const headerBefore = (
    <PanelHeaderBack label="Назад" onClick={() => nav.push('/')} />
  )

  return (
    <Panel id={id}>
      <PanelHeader before={headerBefore}>Буккроссинг</PanelHeader>
      <Group>
        <SortedBookList />
      </Group>
    </Panel>
  )
}