import { Snackbar } from "@vkontakte/vkui"
import { setSnackbar } from "../../store/activeModal"

type Props = {
  icon: React.ReactNode;
  text: string;
  id: string;
  error?: Error;
}

const SnackbarDefault = ({ icon, text, id, error }: Props) => {
  return (
    <Snackbar
      id={id}
      before={icon}
      onClose={() => setSnackbar(null)}
    >
      {text}
      {error && error}
    </Snackbar>
  )
}

export { SnackbarDefault }