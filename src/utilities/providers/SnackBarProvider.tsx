import { useUnit } from "effector-react";
import { ErrorSnackbar, RemoveSnackbar, SuccesSnackbar } from "../../components/snackbars";
import { $statusActiveSnackbar, setSnackbar } from "../../store/activeModal";
import React from "react";

type Props = {
  children: React.ReactNode;
}

type SnackbarMap = { [key: string]: JSX.Element };

const snackbars: SnackbarMap = {
  'fav-adding': <SuccesSnackbar id="fav-adding" text="Успешно добавлено в понравившиеся" />,
  'fav-adding-error': <ErrorSnackbar id="fav-adding-error" text="Ошибка при добавлении в понравившиеся" />,
  'fav-remove': <RemoveSnackbar id="fav-remove" text="Книга удалена из понравившегося" />,
  'fav-remove-error': <ErrorSnackbar id="fav-remove-error" text="Ошибка при удалении из понравившегося" />,
  'book-remove': <SuccesSnackbar id="fav-adding" text="Книга успешно удалена" />,
  'book-update': <SuccesSnackbar id="fav-adding" text="Книга успешно изменена" />,
  'error': <ErrorSnackbar id="fav-remove-error" text="Кажется что то пошло не так" />,
};

const SnackBarProvider = ({ children }: Props) => {
  const status = useUnit($statusActiveSnackbar)

  const activeSnackbar = status ? snackbars[status] : null;

  return (
    <>
      {children}
      {activeSnackbar}
    </>
  )
}

export default SnackBarProvider