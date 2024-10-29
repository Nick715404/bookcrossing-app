import { Button, Div } from '@vkontakte/vkui';
import { UseFormHandleSubmit } from 'react-hook-form';
import { TCreateBookFields } from './types';

type SubmitButtonProps = {
	handleSubmit: () => Promise<void>;
};

export const SubmitButton = ({ handleSubmit }: SubmitButtonProps) => {
	return (
		<Div>
			<Button
				size='l'
				appearance='accent'
				stretched
				type='submit'
				onClick={handleSubmit}
			>
				Сохранить
			</Button>
		</Div>
	);
};
