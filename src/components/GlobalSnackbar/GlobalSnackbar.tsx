import { $snackbar } from "../../store/states";
import SnackbarCostum from "./SnackbarCostum";

import { useUnit } from "effector-react";

type Props = {}

export default function GlobalSnackbar({ }: Props) {
  const snackbar = useUnit($snackbar);

  if (snackbar) return null;

  return <SnackbarCostum data={snackbar} />
}