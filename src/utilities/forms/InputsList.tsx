import { Fragment } from 'react/jsx-runtime';
import { formItems } from '../../constants/forms';
import { StandartInput } from './StandartInput';
import { TCreateBookFields } from './types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type InputsListProps = {
	register: UseFormRegister<TCreateBookFields>;
	errors: FieldErrors<TCreateBookFields>;
};

export const InputsList = ({ register, errors }: InputsListProps) => {
	return (
		<>
			{formItems.map(item => (
				<Fragment key={item.id}>
					<StandartInput
						{...register(item.value as keyof TCreateBookFields, {
							required: {
								message: item.required.message,
								value: item.required.value,
							},
						})}
						id={item.id}
						label={item.label}
						placeholder={item.placeholder}
						required={item.required}
						type={item.type}
						options={item.options}
					/>
				</Fragment>
			))}
		</>
	);
};
