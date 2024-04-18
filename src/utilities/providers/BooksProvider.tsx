import { getAllBooksFX } from '../../api/server/books/books';

import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function BooksProvider({ children }: Props) {

  useEffect(() => {
    // getAllBooksFX();
  }, []);

  return (
    <>
      {children}
    </>
  )
}