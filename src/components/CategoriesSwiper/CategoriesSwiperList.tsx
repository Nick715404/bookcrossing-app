import { CategorySwiperItem } from "./CategorySwiperItem";
import { $categories } from "../../store/categories";
import { Fragment } from "react/jsx-runtime";
import { useUnit } from "effector-react";

export function CategoriesSwiperList() {
  const [categories] = useUnit([$categories]);
  const firstNineCategories = categories.slice(0, 10);

  return (
    <Fragment>
      {
        firstNineCategories && firstNineCategories.map(category => (
          <CategorySwiperItem category={category} />
        ))
      }
    </Fragment>
  )
}