import { Icon28CheckCircleOutline } from "@vkontakte/icons";
import { Button, Snackbar } from "@vkontakte/vkui";

interface IProps {
    onClose: () => void
}

export default function SnackbarCustom({ onClose }: IProps) {
    return (
        <Snackbar
            before={<Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />}
            after={
                <Button mode="link" appearance="accent" size="s">
                    Поделиться
                </Button>
            }
            onClose={onClose}
        >
            Ссылка скопирована
        </Snackbar>
    )
}