import { SearchBooksList } from '../components/SearchBooksList/SearchBooksList'
import { SearchBooks } from '../api/server';
import { useDebounce } from '../hooks/useDebounce'

import Search from '../components/Search/Search'

import { useState } from 'react'
import { useQuery } from 'react-query'
import { Div, Group, Panel } from '@vkontakte/vkui'
import { CustomHeader } from '../components';

type Props = {
  id: string
}

export default function SearchPanel({ id }: Props) {
  const [searchText, setSearchText] = useState<string>('');
  const searchDebounce = useDebounce({ value: searchText, delay: 300 });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['search', searchDebounce],
    queryFn: () => {
      const books = SearchBooks(searchDebounce)
      return books;
    }
  })

  return (
    <Panel id={id}>
      <CustomHeader withBack />
      <Group>
        <Div style={{ padding: '0', marginBottom: '5px' }}>
          <Search
            autoFocus
            handleInputChange={handleInputChange}
            searchText={searchText}
          />
        </Div>
        <SearchBooksList
          isLoading={isLoading}
          data={data}
          isSuccess={isSuccess}
        />
      </Group>
    </Panel>
  )
}