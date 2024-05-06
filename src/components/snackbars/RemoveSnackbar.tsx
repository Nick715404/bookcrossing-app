import { Icon28DeleteOutline } from "@vkontakte/icons"
import { SnackbarDefault } from "./SnackbarDefault"

type Props = {
  id: string;
  text: string;
}

const RemoveSnackbar = ({ id, text }: Props) => {
  return <SnackbarDefault
    icon={<Icon28DeleteOutline />}
    id={id}
    text={text}
  />
}

export { RemoveSnackbar }