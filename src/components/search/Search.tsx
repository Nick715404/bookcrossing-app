import React from "react";
import { useUnit } from "effector-react";
import { $search, searchChanged } from "../../store/search";
import { Search as SearchPanel } from "@vkontakte/vkui"
import { useCallback } from "react";

function Search() {

  const [search, handleSearch] = useUnit([$search, searchChanged]);

  const onSearchChange = useCallback((event) => {
    handleSearch(event.target.value)
  }, [handleSearch]);

  return (
    <SearchPanel
      value={search}
      onChange={onSearchChange}
      placeholder="Поиск" />
  )
}

export default React.memo(Search);