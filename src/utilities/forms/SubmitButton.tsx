import { Button, Div } from '@vkontakte/vkui';

type SubmitButtonProps = {};

export const SubmitButton = ({}: SubmitButtonProps) => {
	return (
		<Div>
			<Button size='l' appearance='accent' stretched>
				Сохранить
			</Button>
		</Div>
	);
};
