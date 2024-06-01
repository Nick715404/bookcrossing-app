import { BooksSkeleton } from "../Skeletons";
import { vkGreyColor } from "../../constants/utils";
import EmptyPlate from "../empty-plate/EmptyPlate";
import { useFetchBooks } from "../../hooks/useFetchBooks";
import { GetAllBooksPipeFX } from "../../store/books";
import { CatalogBookList } from "./CatalogBookList";
import { useEffect } from "react";
import { CardGrid } from "@vkontakte/vkui";
import { Icon28AllCategoriesOutline } from "@vkontakte/icons";

export function CatalogBook() {
  const { data, isLoading, isSuccess } = useFetchBooks();

  useEffect(() => {
    if (isSuccess) GetAllBooksPipeFX(data);
  }, [data, isSuccess]);

  if (isSuccess && data.length === 0) {
    return (
      <EmptyPlate
        icon={<Icon28AllCategoriesOutline fill={vkGreyColor} width={56} height={56} />}
        title="Здесь будут отображаться | все книги приложения"
        text="Создайте карточку книги и она отобразится в каталоге"
        label="Добавить книгу"
        location="create"
      />
    )
  }

  return (
    <CardGrid style={{ gap: '5px' }} size="l">
      {isLoading && <BooksSkeleton />}
      {isSuccess && <CatalogBookList />}
    </CardGrid>
  );
};