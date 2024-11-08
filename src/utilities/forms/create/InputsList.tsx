import { StandartInput } from './StandartInput';
import { SubmitButton } from './SubmitButton';
import { useValidateForm } from '../../../hooks/forms';
import { formItems } from '../../../constants/forms/create';
import { FormImageInput } from './FormImageInput';
import { Fragment } from 'react/jsx-runtime';
import { Div } from '@vkontakte/vkui/dist/components/Div/Div';
import { ImageInput } from '../../../components';

export const InputsList = () => {
	const { handleChange, form, handleSubmitForm } = useValidateForm({});

	return (
		<>
			<FormImageInput />
			<ImageInput />
			{formItems.map(item => (
				<Fragment key={item.id}>
					<StandartInput
						formValue={form[item.value as keyof typeof form]}
						value={item.value}
						id={item.id}
						label={item.label}
						placeholder={item.placeholder}
						required={item.required}
						type={item.type}
						options={item.options}
						handleChange={handleChange}
					/>
				</Fragment>
			))}
			<Div>
				<SubmitButton onSubmit={(e: React.FormEvent) => handleSubmitForm(e)} />
			</Div>
		</>
	);
};
