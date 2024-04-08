import SortedBookList from "../../components/sortedBookList/SortedBookList"
import Search from "../../components/search/Search"
import { Group, Header, Panel, PanelHeader } from "@vkontakte/vkui"

type Props = {
  id: string
}

export default function Genre({ id }: Props) {
  return (
    <Panel id={id}>
      <PanelHeader separator={false}>
        Буккроссинг
      </PanelHeader>
      <Group>
        <Search />
        <SortedBookList />
      </Group>
    </Panel>
  )
}