import { Group, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui"
import SortedBookList from "../../components/sortedBookList/SortedBookList"


type Props = {
  id: string
}

export default function SingleCategory({ id }: Props) {

  const headerBefore = (
    <PanelHeaderBack label="Назад" onClick={() => window.history.back()} />
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