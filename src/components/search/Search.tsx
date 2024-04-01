import React from "react";
import { useUnit } from "effector-react";
import { Search as SearchPanel } from "@vkontakte/vkui"
import { useCallback } from "react";
import { useActiveVkuiLocation, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

type Props = {
  onPanel?: boolean
}

function Search({ onPanel }: Props) {

  const navigator = useRouteNavigator();
  // const { panel: activePanel } = useActiveVkuiLocation();

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