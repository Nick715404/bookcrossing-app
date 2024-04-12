import { IBook, IDataState } from "../interfaces/interface";

export const qualityOptions = [
  {
    value: 'Отличное состояние',
    label: 'Отличное'
  },
  {
    value: 'Хорошее состояние',
    label: 'Хорошее'
  },
  {
    value: 'Примелимое состояние',
    label: 'Приемлимое'
  },
  {
    value: 'Плохое состояние',
    label: 'Плохое'
  },
];

export const imageInputStyles = {
  width: '48%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  aspectRatio: '1 / 1',
  margin: '0 auto',
  backgroundColor: '#F2F3F5',
  borderRadius: '14px',
  color: 'transparent'
}

export const imageInputStylesWithGallery = {
  ...imageInputStyles,
  maxHeight: '58px',
  width: '100%'
}

export const initialState: IDataState = {
  title: '',
  author: '',
  state: '',
  categoryTitle: '',
  isbn: '',
  description: '',
  owner: ''
};

export const segmentControlsOption = [
  {
    label: 'Мои книги',
    value: 'shelf'
  },
  {
    label: 'Мне понравилось',
    value: 'favorites'
  }
]

export const vkBlueColor = '3F8AE0';
export const vkGreyColor = '99A2AD';

export const initialStateSelectedBook: IBook = {
  id: "",
  categoryTitle: "",
  author: "",
  owner: "",
  isbn: "",
  title: "",
  state: "",
  description: "",
  favourite: ''
}