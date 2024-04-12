import { $categories } from "../../store/categories"
import { useUnit } from "effector-react"
import { Card, Div, Group, Text } from "@vkontakte/vkui";
import { iconMap } from "../../dictionary/dictionary";
import { sortBookFx } from "../../utilities/category/category.utils";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { $books } from "../../store/books";

interface IItem {
  id: number;
  title: string;
  iconName: string;
}

export default function CategoriesList() {

  const [categories, books] = useUnit([$categories, $books]);
  const navigator = useRouteNavigator();

  const handleClick = (category: string, id: string) => {
    sortBookFx({ category, books });
    navigator.push(`/category/${id}}`)
  }

  return (
    <>
      {categories && categories.map(category => (
        <Card className="card" key={category.id}
          onClick={() => handleClick(category.title, category.id)}>
          <Div style={{ display: 'flex', alignItems: 'center', gap: 10 }} >
            <Div className="card__wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Group >
                {category.imageName && iconMap[category.imageName]}
              </Group>
            </Div>
            <Group className="card__content">
              <Text className="card__text">{category.title}</Text>
            </Group>
          </Div>
        </Card>
      ))}
    </>
  )
}