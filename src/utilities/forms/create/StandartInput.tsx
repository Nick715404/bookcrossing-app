import { Checkbox, FormItem, Input, Select, Textarea } from '@vkontakte/vkui';
import { TSelectOptions } from '../types';

type StandartInputProps = {
	id: number;
	label: string;
	placeholder: string;
	type: StandartInputPropsTypes;
	required: StandartInputPropsRequired;
	value: StandartInputPropsValues;
	options?: TSelectOptions[];
	isLoading?: boolean;
	isDisable?: boolean;
	formValue?: any;
	handleChange: (
		event: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => void;
};

type StandartInputPropsTypes = 'text' | 'select' | 'checkbox' | 'textarea';

type StandartInputPropsRequired = {
	value: boolean;
	message: string;
};

type StandartInputPropsValues =
	| 'title'
	| 'author'
	| 'state'
	| 'isbn'
	| 'description'
	| 'categoryTitle'
	| 'userId'
	| 'withoutIsbn';

export const StandartInput = ({
	handleChange,
	label,
	placeholder,
	required,
	type,
	value,
	options,
	isDisable,
	isLoading,
}: StandartInputProps) => {
	if (type === 'select') {
		return (
			<FormItem top={`${label} *`} htmlFor={label}>
				<Select
					name={value}
					options={options ? options : []}
					onBlur={handleChange}
				/>
			</FormItem>
		);
	}

	if (type === 'checkbox') {
		return (
			<FormItem htmlFor={label}>
				<Checkbox
					name={value}
					onClick={() => console.log('click on checkbox')}
					id={label}
					onBlur={handleChange}
				>
					ISBN отсутствует
				</Checkbox>
			</FormItem>
		);
	}

	if (type === 'textarea') {
		return (
			<FormItem top={`${label} *`} htmlFor={label}>
				<Textarea
					name={value}
					id={label}
					placeholder={placeholder}
					maxLength={200}
					onBlur={handleChange}
				/>
			</FormItem>
		);
	}

	return (
		<FormItem top={`${label} *`} htmlFor={label}>
			<Input
				name={value}
				placeholder={placeholder}
				id={label}
				type={type}
				required={required.value}
				disabled={isDisable}
				readOnly={isLoading}
				onBlur={handleChange}
			/>
		</FormItem>
	);
};
