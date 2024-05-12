import { CSSProperties } from "react";
import { IBook, IDataState } from "../interfaces/interface";

export const qualityOptions = [
  {
    value: 'Отличное',
    label: 'Отличное'
  },
  {
    value: 'Хорошее',
    label: 'Хорошее'
  },
  {
    value: 'Примелимое',
    label: 'Приемлимое'
  },
  {
    value: 'Плохое',
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

export const imageStyles = {
  marginLeft: 'auto',
  width: '90%',
  borderRadius: '14px',
}

export const customImageButton: CSSProperties = {
  width: 'auto',
  marginBottom: 'auto',
  marginTop: '-15px',
  marginRight: 'auto'
}

export const boxStyles: CSSProperties = {
  display: 'flex',
  position: "relative",
  margin: "5px",
  cursor: "pointer",
  alignItems: 'center',
  gap: '10px',
  marginRight: '-20px'
}

export const imageInputStylesActive= {
  ...imageInputStyles,
  maxHeight: '58px',
  width: '100%'
}

export const imageInputStylesWithGallery = {
  ...imageInputStyles,
  display: 'none',
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
  owner: 0,
  isbn: "",
  title: "",
  state: "",
  description: "",
  favourite: ''
}

export const menuLinks = [
  {
    id: 1,

  },
]