import { Card } from "@vkontakte/vkui"
import { IGenre } from "../../interfaces/interface";
import { iconMap } from "../../dictionary/dictionary";
import { useFetchBooks } from "../../hooks/useFetchBooks";
import { AddBooksToCategoryFX } from "../../utilities/category/category.utils";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

type CategorySwiperItemProps = { category: IGenre, };

export function CategorySwiperItem({ category }: CategorySwiperItemProps) {
  const navigator = useRouteNavigator();
  const { data } = useFetchBooks();

  const handleClick = (category: string, id: string) => {
    if (data) {
      AddBooksToCategoryFX({ category, books: data });
      navigator.push(`/category/${id}}`)
    }
  };

  return (
    <Card
      className="card"
      key={category.id}
      onClick={() => handleClick(category.title, category.id)}
    >
      <div className="card__wrapper">
        <div className="card__icon">
          {category.imageName && iconMap[category.imageName]}
        </div>
        <div className="card__content">
          <span className="card__text">{category.title}</span>
        </div>
      </div>
    </Card>
  );
};