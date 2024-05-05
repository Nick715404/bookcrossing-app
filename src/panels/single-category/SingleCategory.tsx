import SortedBookList from "../../components/sortedBookList/SortedBookList"
import CustomHeader from "../../components/header/CustomHeader"
import { Group, Panel } from "@vkontakte/vkui"

type Props = {
  id: string
}

export default function SingleCategory({ id }: Props) {
  return (
    <Panel id={id}>
      <CustomHeader withBack />
      <Group>
        <SortedBookList />
      </Group>
    </Panel>
  )
}