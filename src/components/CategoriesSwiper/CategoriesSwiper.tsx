import { Icon28MoreHorizontal } from "@vkontakte/icons"
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { CategoriesSwiperList } from "./CategoriesSwiperList";
import { Card, CardScroll } from "@vkontakte/vkui"

export function CategoriesSwiper() {
  const navigator = useRouteNavigator();

  return (
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

      <CategoriesSwiperList />

    </CardScroll >
  )
}