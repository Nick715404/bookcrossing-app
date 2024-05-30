import { CategoriesSwiper } from "./CategoriesSwiper";
import { Fragment } from "react/jsx-runtime";
import { Header } from "@vkontakte/vkui"

export function CategoriesCards() {
  return (
    <Fragment>
      <Header mode="primary" style={{ paddingBottom: '12px' }}>
        <span style={{ fontSize: '18px' }}>Категории</span>
      </Header>
      <CategoriesSwiper />
    </Fragment>
  );
};