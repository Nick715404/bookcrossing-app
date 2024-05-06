import { Icon28ErrorCircleOutline } from "@vkontakte/icons";
import { SnackbarDefault } from "./SnackbarDefault";

type Props = {
  id: string;
  text: string;
  error?: Error;
}

const ErrorSnackbar = ({ id, text, error }: Props) => {
  return <SnackbarDefault
    icon={<Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />}
    text={text}
    id={id}
    error={error}
  />
}

export { ErrorSnackbar };