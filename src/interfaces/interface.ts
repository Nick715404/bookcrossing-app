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
  authorId?: string | null,
  description?: string | null,
  genreId?: string | null,
  imageId?: string,
  isbn: string,
  ownerId?: string | null,
  state: string,
  title: string,
}

export interface ICreateBook {
  bookTitle: string
  bookAuthor: string
  bookQuality?: string
  bookGanre?: string
  bookIsbn: string
  bookDesr?: string
}