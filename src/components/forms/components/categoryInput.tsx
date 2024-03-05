import React, { useEffect, useCallback } from "react";
import { FormItem, Select } from "@vkontakte/vkui";
import { $categories } from "../../../store/categories";
import { useUnit } from "effector-react";
import { getAllCategoriesFX } from "../../../api/server/categories/categories";

type Props = {
  value: string
  change: any
};

function createOptions(genres: any[]) {
  const options = genres.map(genre => ({
    value: genre.title,
    label: genre.title
  }));
  return options;
}

function CategoryInput({ value, change }: Props) {
  const categories = useUnit($categories);

  useEffect(() => {
    getAllCategoriesFX();
  }, []);

  return (
    <FormItem
      top='Категории'
      htmlFor="bookCategory"
    >
      <Select
        id="bookCategory"
        placeholder="Выберите категорию книги"
        name="genre"
        value={value}
        onChange={change}
        options={createOptions(categories)} />
    </FormItem>
  );
}

export default React.memo(CategoryInput);
