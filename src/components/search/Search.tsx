import React from "react";
import { useUnit } from "effector-react";
import { $search, searchChanged } from "../../store/search";
import { Search as SearchPanel } from "@vkontakte/vkui"
import { useCallback } from "react";

import { $searchResult } from "../../store/search";
import { $books } from "../../store/books";

function Search() {

  const [search, handleSearch, books] = useUnit([$search, searchChanged, $books]);

  const [searchResult] = useUnit($searchResult);

  

  const onSearchChange = useCallback((event) => {
    handleSearch(event.target.value)
    console.clear();
    console.log(searchResult);
    console.log(books);
    console.log($books);
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(filteredBooks);
  }, [handleSearch]);

  return (
    <SearchPanel
      value={search}
      onChange={onSearchChange}
      placeholder="Поиск" />
  )
}

export default React.memo(Search);