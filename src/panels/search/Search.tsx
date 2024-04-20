import { SearchBooksList } from '../../components/SearchBooksList/SearchBooksList'
import { SearchBooks } from '../../api/server/search'
import { useDebounce } from '../../hooks/useDebounce'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'

import Search from '../../components/search/Search'

import { useState } from 'react'
import { useQuery } from 'react-query'
import { Group, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'

type Props = {
  id: string
}

export default function SearchPanel({ id }: Props) {
  const [searchText, setSearchText] = useState<string>('');
  const searchDebounce = useDebounce({ value: searchText, delay: 300 });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const navigator = useRouteNavigator();

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['search', searchDebounce],
    queryFn: () => {
      const books = SearchBooks(searchDebounce)
      return books;
    }
  })

  const headerBefore = (
    <PanelHeaderBack label="Назад" onClick={() => navigator.back()} />
  )

  return (
    <Panel id={id}>
      <PanelHeader before={headerBefore}>Буккроссинг</PanelHeader>
      <Group>
        <Search
          handleInputChange={handleInputChange}
          searchText={searchText}
        />
        <SearchBooksList
          isLoading={isLoading}
          data={data}
          isSuccess={isSuccess}
        />
      </Group>
    </Panel>
  )
}