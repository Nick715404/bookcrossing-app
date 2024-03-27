import { IDataState } from "../interfaces/interface";

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
    label: 'Полка',
    value: 'shelf'
  },
  {
    label: 'Избраное',
    value: 'favorites'
  }
]

// export const statusBook = (
//   /*<SplitLayout modal={modal} style={{padding: 0, margin: 0}}>*/
//   /*<SimpleCell  onClick={() => setActiveModal('statusDescription')}>*/
//   <CellButton onClick={() => setStatusActiveModal('statusDescription')} style={{ padding: 0, margin: 0 }}>
//     Состояние
//   </CellButton>
//   /*</SimpleCell>*/
//   //  </SplitLayout>
// )