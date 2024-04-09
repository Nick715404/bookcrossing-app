import { $categories } from "../../store/categories";
import { categoriesBooksFX } from "../../utilities/category/category.utils";
import { $books } from "../../store/books";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

import { useUnit } from "effector-react";
import { Icon24BrainOutline, Icon28MoreHorizontal } from '@vkontakte/icons';
import { CardScroll, Card, Group, Header, Text, Div } from "@vkontakte/vkui"

type Props = {}

export default function Categories({ }: Props) {

  const [categories, books] = useUnit([$categories, $books]);
  const navigator = useRouteNavigator();

  const handleClick = (title: string, id: string) => {
    categoriesBooksFX({ category: title, books });
  }

  return (
    <>
      <Header
        mode="primary"
        style={{ paddingBottom: '12px' }}>
        <span style={{ fontSize: '18px' }}>Категории</span>
      </Header>
      <CardScroll size='s'>

        <Card className="card" onClick={() => navigator.push('/category/all')}>
          <div className="card__wrapper">
            <div className="card__icon">
              <Icon28MoreHorizontal style={{ color: '#2688EB' }} />
            </div>
            <div className="card__content">
              <span className="card__text">Все категории</span>
            </div>
          </div>
        </Card>

        {categories && categories.map(category => (
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

      </CardScroll >
    </>
  )
}

