import React, { useEffect, useMemo } from "react";
import { FormItem, Select } from "@vkontakte/vkui";
import { $categories } from "../../../../store/categories";
import { useUnit } from "effector-react";
import { getAllCategoriesFX } from "../../../../api/server/categories.query";

type Props = {
  value: string | undefined
  onChange: (e: any) => void
};

function CategorySelect({ value, onChange }: Props) {

  const categories = useUnit($categories);

  const createOptions = useMemo(() => {
    const options = categories.map(category => ({
      value: category.title,
      label: category.title
    }));
    return options;
  }, [categories])

  return (
    <FormItem
      top='Категории *'
      htmlFor="bookCategory"
    >
      <Select
        id="bookCategory"
        placeholder="Выберите категорию книги"
        name="genre"
        value={value}
        onChange={onChange}
        options={createOptions} />
    </FormItem>
  );
}

export default React.memo(CategorySelect);
