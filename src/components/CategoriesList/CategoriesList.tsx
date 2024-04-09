import { $categories } from "../../store/categories"
import { useUnit } from "effector-react"
import { Div } from "@vkontakte/vkui";

export default function CategoriesList() {

  const categories = useUnit($categories);

  return (
    <Div>
      List of fetched categories
    </Div>
  )
}