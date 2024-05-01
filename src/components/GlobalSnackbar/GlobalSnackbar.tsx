import { $snackbar } from "../../store/states";
import SnackbarCostum from "./SnackbarCostum";
import { useUnit } from "effector-react";

interface IProps {
  children: React.ReactNode;
}

export default function GlobalSnackbar({ children }: IProps) {
  const snackbar = useUnit($snackbar);

  console.log(`Global snack`, snackbar);

  if (!snackbar) return null;

  return (
    <>
      {children}
      <SnackbarCostum data={snackbar} />
    </>
  )
}