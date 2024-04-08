import { getAllBooksFX } from '../../api/server/books/books';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { $status } from '../../store/books';

import React, { useEffect } from 'react'
import { ChangeLoadingStatusFX } from '../loading/loading.utils';

type Props = {
  children: React.ReactNode
}

export default function BooksProvider({ children }: Props) {

  useEffect(() => {
    getAllBooksFX();
  }, []);

  return (
    <>
      {children}
    </>
  )
}