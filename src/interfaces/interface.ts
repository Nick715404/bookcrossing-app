export interface INavigationBarButton {
  nameButton?: string,
  image?: string
};

export interface IAdressJson {
  adress: string
};

export interface ISlide {
  image: string,
  text: string
};

export interface ISliderProps {
  dataPath: string;
};

export interface IBook {
  id: string
  author?: string | null,
  description?: string | null,
  categoryTitle?: string | null,
  imageId?: string,
  isbn: string,
  ownerId?: string | null,
  state: string,
  title: string,
}

export interface ICreateBook {
  bookTitle: string
  bookAuthor: string
  bookQuality?: string | null,
  bookCategory?: string | null,
  bookIsbn: string
  bookDesr?: string | null,
}

export interface IGenre {
  id: string
  title: string
  imageName: string
  books: IBook[]
}

export interface IDataState {
  title: string,
  author: string,
  quality?: string,
  category?: string,
  isbn: string,
  descr?: string
}