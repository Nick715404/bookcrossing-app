import React, { useEffect, useMemo } from "react";
import { FormItem, Select } from "@vkontakte/vkui";
import { $categories } from "../../../../store/categories";
import { useUnit } from "effector-react";
import { getAllCategoriesFX } from "../../../../api/server/categories/categories";

type Props = {
  value: string | undefined
  change: any
};

function CategorySelect({ value, change }: Props) {

  const categories = useUnit($categories);

  useEffect(() => {
    getAllCategoriesFX();
  }, []);

  const createOptions = useMemo(() => {
    const options = categories.map(category => ({
      value: category.title,
      label: category.title
    }));
    return options;
  }, [categories])

  return (
    <FormItem
      top='Категории'
      htmlFor="bookCategory"
    >
      <Select
        id="bookCategory"
        placeholder="Выберите категорию книги"
        name="genre"
        // defaultValue='Выберите категорию книги'
        value={value}
        onChange={change}
        options={createOptions} />
    </FormItem>
  );
}

export default React.memo(CategorySelect);
