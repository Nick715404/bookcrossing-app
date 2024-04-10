import { Group, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import React from 'react'
import Search from '../../components/search/Search'
import SortedBookList from '../../components/sortedBookList/SortedBookList'
import { SearchBooksList } from '../../components/SearchBooksList/SearchBooksList'

type Props = {
  id: string
}

export default function SearchPanel({ id }: Props) {

  const headerBefore = (
    <PanelHeaderBack label="Назад" onClick={() => window.history.back()} />
  )

  return (
    <Panel id={id}>
      <PanelHeader before={headerBefore}>Буккроссинг</PanelHeader>
      <Group>
        <Search />
        <SearchBooksList />
      </Group>
    </Panel>
  )
}