export type TBook = {
	id: string;
	categoryId: null | string;
	isbn: string;
	title: string;
	state: string;
	description: string;
	owner: string;
	releaseDate: string;
	authors?: TBookAuthors[];
};

export type TBookAuthors = {
	bookId: string;
	authorId: string;
	author: TBookAuthor;
};

export type TBookAuthor = {
	id: string;
	name: string;
};
