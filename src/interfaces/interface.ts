import { MouseEventHandler } from "react";

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
  categoryTitle?: string | null,
  author?: string | null,
  owner?: string,
  isbn: string,
  title: string,
  state: string,
  description?: string | null,
  imageId?: string,
  favourite: string | null
}

export interface IExtendedBook extends IBook {
  shelf: string
  releaseDate?: string
}

export interface ICreateBook {
  isbn?: string,
  title: string
  state: string | undefined,
  description: string | undefined,
  author: string,
  categoryTitle: string | undefined
  owner: string
}

export interface IGenre {
  id: string
  title: string
  imageName: string
  books: IBook[]
}

export interface IDataState extends ICreateBook { }

export interface ICreateUser {
  userId?: string
  vkid: string
  city: string
}

export interface IPassIdToModalPage {
  changeActiveModal?: (id: string | null) => void
  onClose?: any
  id: string
  data?: any
  openFiltersModal?: any
}

export interface ISwitchPageById {
  id: string;
  go: MouseEventHandler<HTMLElement>
}

export interface IUser extends ICreateUser {
  name: string
  surName: string
}

export interface IServerUser {
  userId: string
  vkid: string
  city: string
  name: string
  surName: string
}

export interface IInitAppEntities {
  children: React.ReactNode
}

export interface IShelfInfo {
  books: IExtendedBook[] | undefined
  info: {
    id: string
    userId: string
  }
}