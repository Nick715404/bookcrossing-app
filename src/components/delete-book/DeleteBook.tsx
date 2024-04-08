import { useState } from 'react';
import { vkBlueColor } from '../../constants/utils';
import { setStatusActiveModal } from '../../store/activeModal';

import { Icon28DeleteOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import { deleteBookFX } from '../../api/server/books/books';

type Props = {
  bookId: string
}

export default function DeleteBook({ bookId }: Props) {

  const handleClick = async () => {
    // setStatusActiveModal("deleteBook");
    deleteBookFX(bookId);
  };

  return (
    <IconButton onClick={handleClick} className='delete-book-btn'>
      <Icon28DeleteOutline fill={vkBlueColor} />
    </IconButton>
  )
}