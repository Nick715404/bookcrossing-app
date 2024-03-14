import { useEffect } from "react"
import { Icon24BrainOutline } from '@vkontakte/icons';
import { CardScroll, Card, Group, Header } from "@vkontakte/vkui"
import { useUnit } from "effector-react";
import { $categories } from "../../store/categories";
import { getAllCategoriesFX } from "../../api/server/categories/categories";

export default function Categories() {

  const categories = useUnit($categories);

  useEffect((): any => {
    getAllCategoriesFX();
  }, [])

  return (
    <Group>
      <Header mode="primary" style={{ paddingBottom: '12px' }}>
        Категории
      </Header>
      <CardScroll size='s'>
        {categories && categories.map(category => (
          <Card className="card" key={category.id}>
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
    </Group>
  )
}