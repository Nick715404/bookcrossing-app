import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

import React from "react";
import { Search as SearchPanel } from "@vkontakte/vkui"

type Props = {
  onPanel?: boolean,
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => any,
  searchText?: string;
}

function Search({ onPanel, handleInputChange, searchText }: Props) {
  const navigator = useRouteNavigator();

  const handleGoToPanel = () => {
    if (onPanel) {
      navigator.push('/search');
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