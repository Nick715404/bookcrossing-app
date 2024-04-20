import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { searchHandlerFX } from "../../utilities/search/search.utils";
import { $books } from "../../store/books";

import { useUnit } from "effector-react";
import React, { useEffect, useState } from "react";
import { Search as SearchPanel } from "@vkontakte/vkui"
import { useQuery } from "react-query";
import { SearchBooks } from "../../api/server/search";
import { useDebounce } from "../../hooks/useDebounce";

type Props = {
  onPanel?: boolean,
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => any,
  searchText?: string;
}

function Search({ onPanel, handleInputChange, searchText }: Props) {
  const navigator = useRouteNavigator();

  const handleGoToPanel = () => {
    if (onPanel) {
      return navigator.push('/search');
    }
  };

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