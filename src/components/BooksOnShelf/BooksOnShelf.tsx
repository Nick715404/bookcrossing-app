import { BooksSkeleton } from "../Skeletons";
import { ShelfBooksList } from "./ShelfBooksList";
import { useGetBooksOnShelf } from "../../hooks/useGetBooksOnShelf";
import { CardGrid } from "@vkontakte/vkui";

export function BooksOnShelf() {
  const { isSuccess, isLoading } = useGetBooksOnShelf();

  return (
    <CardGrid style={{ gap: '5px' }} size="l">
      {isLoading && <BooksSkeleton />}
      {isSuccess && <ShelfBooksList />}
    </CardGrid>
  );
};