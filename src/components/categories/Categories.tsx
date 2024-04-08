import { $categories } from "../../store/categories";
import { getAllCategoriesFX } from "../../api/server/categories/categories";
import { useEffect } from "react"
import { useUnit } from "effector-react";
import { Icon24BrainOutline } from '@vkontakte/icons';
import { CardScroll, Card, Group, Header, Text, Div } from "@vkontakte/vkui"
import { categoriesBooksFX } from "../../utilities/category/category.utils";
import { $books } from "../../store/books";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

type Props = {}

export default function Categories({ }: Props) {

  const [categories, books] = useUnit([$categories, $books]);
  const navigator = useRouteNavigator();

  const handleClick = (title: string, id: string) => {
    navigator.push(`/genre/${title}`);
    categoriesBooksFX({ category: title, books });
  }

  return (
    <>
      {categories &&
        <>
          <Header
            mode="primary"
            style={{ paddingBottom: '12px' }}>
            <span style={{ fontSize: '18px' }}>Категории</span>
          </Header>
          <CardScroll size='s'>
            {categories.map(category => (
              <Card
                className="card"
                key={category.id}
                onClick={() => handleClick(category.title, category.id)}
              >
                <div className="card__wrapper">
                  <div className="card__icon">
                    <Icon24BrainOutline style={{ color: '#2688EB' }} />
                  </div>
                  <div className="card__content">
                    <span className="card__text">{category.title}</span>
                  </div>
                </div>
              </Card>
            ))}
          </CardScroll>
        </>
      }
    </>
  )
}

