import { Button, Div } from '@vkontakte/vkui';

type SubmitButtonProps = {
	onSubmit?: (e: React.FormEvent) => void;
};

export const SubmitButton = ({ onSubmit }: SubmitButtonProps) => {
	return (
		<Button
			size='l'
			appearance='accent'
			stretched
			type='submit'
			onClick={onSubmit}
		>
			Сохранить
		</Button>
	);
};
