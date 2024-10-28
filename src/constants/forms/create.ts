import { StandartInputProps } from '../../utilities/forms/types';

export const formItems: StandartInputProps[] = [
	{
		id: 1,
		label: 'Название',
		value: 'title',
		placeholder: 'Мастер и Маргарита',
		type: 'text',
		required: {
			value: true,
			message: 'Книга должна иметь название.',
		},
	},
	{
		id: 2,
		label: 'Автор',
		value: 'author',
		placeholder: 'М. А. Булгаков',
		type: 'text',
		required: {
			value: true,
			message:
				'Книга должна иметь автора. Если авторов несколько напишите одного.',
		},
	},
	{
		id: 3,
		label: 'Состояние',
		placeholder: '',
		value: 'state',
		type: 'select',
		required: {
			value: true,
			message: 'Укажите состояние книги.',
		},
		options: [
			{
				value: '',
				label: 'Выберите значение',
			},
			{
				value: 'Отличное',
				label: 'Отличное',
			},
			{
				value: 'Хорошее',
				label: 'Хорошее',
			},
			{
				value: 'Примелимое',
				label: 'Приемлимое',
			},
			{
				value: 'Плохое',
				label: 'Плохое',
			},
		],
	},
	{
		id: 4,
		label: 'ISBN',
		placeholder: 'ISBN',
		value: 'isbn',
		type: 'text',
		required: {
			value: true,
			message: 'Укажите ISBN книги.',
		},
	},
	{
		id: 5,
		label: 'ISBN отсутствует',
		placeholder: '',
		value: 'withoutIsbn',
		type: 'checkbox',
		required: {
			value: false,
			message: '',
		},
	},
	{
		id: 6,
		label: 'Комменатрий',
		placeholder: 'Добавьте комментарий.',
		value: 'description',
		type: 'textarea',
		required: {
			value: false,
			message: '',
		},
	},
];
