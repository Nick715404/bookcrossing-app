import { CategorySwiperItem } from "./CategorySwiperItem";
import { $categories } from "../../store/categories";
import { Fragment } from "react/jsx-runtime";
import { useUnit } from "effector-react";

export function CategoriesSwiperList() {
  const [categories] = useUnit([$categories]);
  const slicedCategories = categories.slice(0, 10);

  return (
    <Fragment>
      {
        slicedCategories && slicedCategories.map(category => (
          <CategorySwiperItem key={category.id} category={category} />
        ))
      }
    </Fragment>
  )
}