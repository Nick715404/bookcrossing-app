import CategoriesList from "../../components/CategoriesList/CategoriesList"
import CustomHeader from "../../components/header/CustomHeader"
import { Group, Panel} from "@vkontakte/vkui"

type Props = {
  id: string
}

export default function Categories({ id }: Props) {
  return (
    <Panel id={id}>
      <CustomHeader withBack />
      <Group>
        <CategoriesList />
      </Group>
    </Panel>
  )
}