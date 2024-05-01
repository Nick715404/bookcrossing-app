import { Snackbar } from "@vkontakte/vkui";
import { hideShackbarFX } from "../../store/states";

interface IProps {
  data: {
    text: string,
    icon: React.ReactNode,
    duration: number,
  }
}

export default function SnackbarCostum({ data }: IProps) {
  console.log('Snackbar!');
  
  return (
    <Snackbar
      before={data.icon}
      action={data.text}
      duration={data.duration}
      onClose={hideShackbarFX}
    />
  );
};