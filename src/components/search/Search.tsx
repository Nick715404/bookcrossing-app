import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { searchHandlerFX } from "../../utilities/search/search.utils";
import { $books } from "../../store/books";

import { useUnit } from "effector-react";
import React, { useEffect, useState } from "react";
import { Search as SearchPanel } from "@vkontakte/vkui"

type Props = {
  onPanel?: boolean
}

// - Книги из города юзера

function Search({ onPanel }: Props) {
  const [searchText, setSearchText] = useState<string>('');
  const books = useUnit($books);
  const navigator = useRouteNavigator();


  const handleGoToPanel = () => {
    if (onPanel) {
      return navigator.push('/search');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      searchHandlerFX({ searchText: searchText, listOfBooks: books });
    }, 500)

    return () => clearTimeout(Debounce);
  }, [searchText]);

  return (
    <SearchPanel
      value={searchText}
      onInput={handleInputChange}
      onClick={handleGoToPanel}
      placeholder="Поиск"
    />
  )
}

export default React.memo(Search);