import { textStyles } from '../../../../components';
import { Div } from '@vkontakte/vkui/dist/components/Div/Div';
import { Input } from '@vkontakte/vkui/dist/components/Input/Input';
import { Text } from '@vkontakte/vkui/dist';
import { useRef } from 'react';
import { imageInputStyles } from '../../../../constants';

type FormImageInputProps = {};

export const FormImageInput = ({}: FormImageInputProps) => {
	const inputRef = useRef(null);

	return (
		<Div>
			<Text weight='3' style={textStyles}>
				Фотографии
			</Text>
			<Input
				className='file-input'
				type='file'
				accept='.jpg, .jpeg, .png'
				getRef={inputRef}
				style={imageInputStyles}
			/>
		</Div>
	);
};
