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
  owner: number,
  isbn: string,
  title: string,
  state: string,
  description?: string | null,
  imageId?: string,
  favourite?: any;
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
  vkId: number
  city: string
  name: string
  surName: string
  avatar?: string
}

export interface IInitAppEntities {
  children: React.ReactNode
}

export interface IShelfInfo {
  books: IExtendedBook[]
  info: {
    id: string
    userId: string
  }
}

export interface BookStoreState {
  category: string;
  books: IBook[];
}

export interface IVkUser {
  id: number;
  bdate_visibility?: number;
  city?: {
    id?: number,
    title: string
  },
  country?: {
    id: number;
    title: string;
  },
  timezone?: number;
  photo_200?: string;
  photo_max_orig?: string;
  sex?: number;
  photo_100?: string;
  photo_base?: string;
  first_name: string;
  last_name: string;
  can_access_closed?: boolean;
  is_closed?: boolean
}

export interface ICity {
  id: number;
  important: number;
  title: string;
}

export interface IPromiseCities {
  response: {
    count: number;
    items: ICity[]
  }
}