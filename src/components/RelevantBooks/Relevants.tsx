import { CatalogBook } from "./CatalogBook";
import { Fragment } from "react/jsx-runtime";
import { Header, Text } from "@vkontakte/vkui"

export function Relevants() {
  return (
    <Fragment>
      <Header mode="primary" style={{ paddingBottom: '12px', marginTop: '1px' }}>
        <Text weight="1" style={{ fontSize: '18px' }}>Новые</Text>
      </Header>
      <CatalogBook />
    </Fragment>
  )
}