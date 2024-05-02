import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

import React from "react";
import { Search as SearchPanel } from "@vkontakte/vkui"

type Props = {
  onPanel?: boolean,
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => any,
  searchText?: string;
  autoFocus?: boolean;
}

function Search({ onPanel, handleInputChange, searchText, autoFocus }: Props) {
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
      autoFocus={autoFocus}
    />
  )
}

export default React.memo(Search);