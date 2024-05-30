import { AllCategoriesList } from "../../components/CategoriesSwiper/AllCategoriesList"
import CustomHeader from "../../components/header/CustomHeader"
import { Group, Panel } from "@vkontakte/vkui"

type Props = {
  id: string
}

export default function Categories({ id }: Props) {
  return (
    <Panel id={id}>
      <CustomHeader withBack />
      <Group>
        <AllCategoriesList />
      </Group>
    </Panel>
  )
}