import { useList } from "effector-react";
import { $searchResult } from "../../store/search";

export default function SearchResult() {

  const results = useList($searchResult, (result) => (
    <div>{result.title}</div>
  ));

  return (
    <div>{results}</div>
  )
}