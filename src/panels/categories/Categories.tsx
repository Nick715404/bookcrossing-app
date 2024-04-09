import SortedBookList from "../../components/sortedBookList/SortedBookList"
import Search from "../../components/search/Search"
import { Group, Header, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui"

type Props = {
  id: string
}

export default function Categories({ id }: Props) {

  const beforeHeader = (
    <PanelHeaderBack label="Назад" onClick={() => window.history.back()} />
  )

  return (
    <Panel id={id}>
      <PanelHeader before={beforeHeader} separator={false}>
        Буккроссинг
      </PanelHeader>
      All Categories
    </Panel>
  )
}