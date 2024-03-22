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
  isbn?: string,
  title: string
  state: string | undefined,
  description: string | undefined,
  author: string,
  categoryTitle: string | undefined
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
  givenBooks?: number
  recievdBooks?: number
}

export interface IPassIdToModalPage {
  changeActiveModal?: (id: string | null) => void
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

// export interface IServerUser {
//   info?: IUser
//   shelf: {
//     id: string
//     userId: string
//   }
// }