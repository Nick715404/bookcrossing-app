import { $categories } from "../../store/categories"
import { iconMap } from "../../dictionary/dictionary";
import { AddBooksToCategoryFX } from "../../utilities/category/category.utils";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { useFetchBooks } from "../../hooks/useFetchBooks";

import { useUnit } from "effector-react"
import { Card, CellButton, Div, Group, Text } from "@vkontakte/vkui";

interface IItem {
  id: number;
  title: string;
  iconName: string;
}

export default function CategoriesList() {
  const categories = useUnit($categories);
  const navigator = useRouteNavigator();

  const { data } = useFetchBooks();

  const handleClick = (category: string, id: string) => {
    if (data) {
      AddBooksToCategoryFX({ category, books: data });
      navigator.push(`/category/${id}}`);
    }
    return;
  }

  return (
    <>
      {
        categories && categories.map(category => (
          <CellButton
            className="card-in-categories"
            key={category.id}
            onClick={() => handleClick(category.title, category.id)}
          >
            <Div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 0 }}>
              <Div
                className="card__wrapper"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <Group>
                  {category.imageName && iconMap[category.imageName]}
                </Group>
              </Div>
              <Group className="card__content">
                <Text className="card__text">{category.title}</Text>
              </Group>
            </Div>
          </CellButton>
        ))
      }
    </>
  )
}