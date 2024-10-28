import { Checkbox, FormItem, Input, Select, Textarea } from '@vkontakte/vkui';
import { TSelectOptions } from './types/forms';

type StandartInputProps = {
	id: number;
	label: string;
	placeholder: string;
	type: 'text' | 'select' | 'checkbox' | 'textarea';
	required: {
		value: boolean;
		message: string;
	};
	options?: TSelectOptions[];
	isLoading?: boolean;
	isDisable?: boolean;
};

export const StandartInput = ({
	id,
	required,
	type,
	options,
	isDisable,
	isLoading,
	placeholder,
	label,
}: StandartInputProps) => {
	if (type === 'select') {
		return (
			<FormItem top={`${label} *`} htmlFor={label}>
				<Select
					onChange={e => console.log(e.target.value)}
					options={options ? options : []}
				/>
			</FormItem>
		);
	}

	if (type === 'checkbox') {
		return (
			<FormItem htmlFor={label}>
				<Checkbox onClick={() => console.log('click on checkbox')} id={label}>
					ISBN отсутствует
				</Checkbox>
			</FormItem>
		);
	}

	if (type === 'textarea') {
		return (
			<FormItem top={`${label} *`} htmlFor={label}>
				<Textarea id={label} placeholder={placeholder} maxLength={200} />
			</FormItem>
		);
	}

	return (
		<FormItem top={`${label} *`} htmlFor={label}>
			<Input
				placeholder={placeholder}
				id={label}
				type={type}
				required={required.value}
				disabled={isDisable}
				readOnly={isLoading}
			/>
		</FormItem>
	);
};
