export type TSuccessResponse<T> = {
	message: string;
	status: 'ok' | 'bad';
	data: T;
};
