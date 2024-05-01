import SortedBookList from "../../components/sortedBookList/SortedBookList"
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router"
import { Group, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui"

type Props = {
  id: string
}

export default function SingleCategory({ id }: Props) {
  const navigator = useRouteNavigator();

  const headerBefore = (
    <PanelHeaderBack label="Назад" onClick={() => navigator.back()} />
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