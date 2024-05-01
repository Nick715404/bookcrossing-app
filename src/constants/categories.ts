import { ICategoriesBooksStore } from "../interfaces/interface"

export const bookCategories = [
  {
    id: 1,
    title: 'Детские книги',
    icon: '',
  },
  {
    id: 2,
    title: 'Какая то фигня еще',
    icon: '',
  },
]

export const categoriesBooksInitState = {
  title: '',
  books: [],
} satisfies ICategoriesBooksStore