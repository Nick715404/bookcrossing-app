import { StandartInput } from './StandartInput';
import { SubmitButton } from './SubmitButton';
import { Fragment } from 'react/jsx-runtime';
import { Div } from '@vkontakte/vkui/dist/components/Div/Div';
import { useValidateForm } from '../../../hooks/forms';
import { formItems } from '../../../constants/forms/create';

export const InputsList = () => {
	const { handleChange, form, handleSubmitForm } = useValidateForm({});

	return (
		<>
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
