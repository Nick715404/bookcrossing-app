import React, { forwardRef } from 'react';
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
	getRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
};

export const StandartInput = forwardRef<HTMLDivElement, StandartInputProps>(
	(
		{
			id,
			label,
			placeholder,
			isDisable,
			required,
			type,
			isLoading,
			options,
			getRef,
		},
		ref
	) => {
		if (type === 'select') {
			return (
				<FormItem top={`${label} *`} htmlFor={label}>
					<Select
						getRef={getRef as React.Ref<HTMLSelectElement>} // Убедитесь, что передаете правильный тип
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
					<Textarea
						getRef={getRef as React.Ref<HTMLTextAreaElement>} // Использование getRef для Textarea
						id={label}
						placeholder={placeholder}
						maxLength={200}
					/>
				</FormItem>
			);
		}

		return (
			<FormItem top={`${label} *`} htmlFor={label}>
				<Input
					getRef={getRef as React.Ref<HTMLInputElement>} // Использование getRef для Input
					placeholder={placeholder}
					id={label}
					type={type}
					required={required.value}
					disabled={isDisable}
					readOnly={isLoading}
				/>
			</FormItem>
		);
	}
);

StandartInput.displayName = 'StandartInput';
