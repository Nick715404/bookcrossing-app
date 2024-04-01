import React, { useEffect } from 'react'
import { getAllBooksFX } from '../api/server/books/books';

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