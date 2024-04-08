import { useActiveVkuiLocation, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

import React from "react";
import { Search as SearchPanel } from "@vkontakte/vkui"

type Props = {
  onPanel?: boolean
}

// - Книги из города юзера

function Search({ onPanel }: Props) {

  const navigator = useRouteNavigator();

  const handleGoToPanel = () => {
    if (onPanel) {
      return navigator.push('/search');
    }
  };

  return (
    <SearchPanel onClick={handleGoToPanel} placeholder="Поиск" />
  )
}

export default React.memo(Search);