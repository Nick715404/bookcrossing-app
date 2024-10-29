import { useValidateForm } from './hooks';
import { InputsList } from './InputsList';
import { FormLayoutGroup, Group } from '@vkontakte/vkui';
import { SubmitButton } from './SubmitButton';
import { TCreateBookFields } from './types';

export const StandartForm = () => {
	const { errors, handleSubmit, register, reset } = useValidateForm({});

	const onSubmit = (formData: TCreateBookFields) => {
		console.log('adawd');
	};

	return (
		<FormLayoutGroup onSubmit={handleSubmit(onSubmit)}>
			<Group>
				{/* image */}
				<InputsList register={register} errors={errors} />
				{/* submit */}
				<SubmitButton handleSubmit={handleSubmit(onSubmit)} />
			</Group>
		</FormLayoutGroup>
	);
};
