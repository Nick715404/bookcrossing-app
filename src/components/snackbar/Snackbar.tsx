import { Icon28CheckCircleOutline } from "@vkontakte/icons";
import { Button, Snackbar } from "@vkontakte/vkui";
import { useState } from "react";

interface IProps {
    id: string;
}

export default function SnackbarCustom({ id }: IProps) {
    return (
        <>
            <Snackbar
                id={id}
                before={<Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />}
                onClose={() => console.log('snack close')}
            >
                Книга успешно удалена!
            </Snackbar>
        </>
    )
}