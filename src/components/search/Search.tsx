import React from "react";
import { useUnit } from "effector-react";
import { Search as SearchPanel } from "@vkontakte/vkui"
import { useCallback } from "react";

function Search() {
  return (
    <SearchPanel placeholder="Поиск" />
  )
}

export default React.memo(Search);