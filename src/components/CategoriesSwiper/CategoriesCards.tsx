import { CategoriesSwiper } from "./CategoriesSwiper";
import { Fragment } from "react/jsx-runtime";
import { Header, Text } from "@vkontakte/vkui"

export function CategoriesCards() {
  return (
    <Fragment>
      <Header mode="primary" style={{ paddingBottom: '12px' }}>
        <Text weight="1" style={{ fontSize: '18px' }}>Категории</Text>
      </Header>
      <CategoriesSwiper />
    </Fragment>
  );
};