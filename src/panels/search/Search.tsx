import { useState } from 'react'
import Search from '../../components/search/Search'
import { SearchBooksList } from '../../components/SearchBooksList/SearchBooksList'

import { Group, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import { useQuery } from 'react-query'
import { SearchBooks } from '../../api/server/search'
import { useDebounce } from '../../hooks/useDebounce'

type Props = {
  id: string
}

export default function SearchPanel({ id }: Props) {
  const [searchText, setSearchText] = useState<string>('');
  const searchDebounce = useDebounce({ value: searchText, delay: 300 });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const { data, isSuccess } = useQuery({
    queryKey: ['search', searchDebounce],
    queryFn: () => {
      const books = SearchBooks(searchDebounce)
      return books;
    }
  })

  const headerBefore = (
    <PanelHeaderBack label="Назад" onClick={() => window.history.back()} />
  )

  return (
    <Panel id={id}>
      <PanelHeader before={headerBefore}>Буккроссинг</PanelHeader>
      <Group>
        <Search handleInputChange={handleInputChange} searchText={searchText} />
        <SearchBooksList data={data} isSuccess={isSuccess} />
      </Group>
    </Panel>
  )
}