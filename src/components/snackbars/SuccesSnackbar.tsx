import { Icon28CheckCircleOutline } from "@vkontakte/icons";
import SnackbarCostum from "../GlobalSnackbar/SnackbarCostum";
import { SnackbarDefault } from "./SnackbarDefault";

type Props = {
  id: string;
  text: string;
}

const SuccesSnackbar = ({ id, text }: Props) => {
  return <SnackbarDefault
    icon={<Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />}
    text={text}
    id={id}
  />
}

export { SuccesSnackbar };