export type TSelectOptions = {
	value: string;
	label: string;
};

export type StandartInputProps = {
	id: number;
	label: string;
	value: string;
	placeholder: string;
	type: 'text' | 'select' | 'checkbox' | 'textarea';
	required: {
		value: boolean;
		message: string;
	};
	options?: TSelectOptions[];
};

export type TCreateBookFields = {
	title: string;
	author: string;
	state: string;
	isbn: string;
	description: string;
	categoryTitle?: string;
	userId?: string;
};
