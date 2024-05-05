import CatalogBookList from "../CatalogBookList/CatalogBookList";

import { Header } from "@vkontakte/vkui"

export default function Relevants() {
  return (
    <>
      <Header
        mode="primary"
        style={{ paddingBottom: '12px', marginTop: '1px' }}
      >
        <span style={{ fontSize: '18px' }}>Новые</span>
      </Header>
      <CatalogBookList />
    </>
  )
}