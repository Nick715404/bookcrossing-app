import { useValidateForm } from './hooks';
import { InputsList } from './InputsList';
import { Button, Div, FormLayoutGroup, Group } from '@vkontakte/vkui';
import { SubmitButton } from './SubmitButton';

export const StandartForm = () => {
	const { errors, handleSubmit, register, reset } = useValidateForm({});

	return (
		<FormLayoutGroup>
			<Group>
				{/* image */}
				<InputsList register={register} errors={errors} />
				{/* submit */}
				<SubmitButton />
			</Group>
		</FormLayoutGroup>
	);
};
