import { CustomHeader, UserInfo } from '../../components';
import SegmentedControlCustom from '../../components/segmentControl/SegmentControl';
import { BooksOnShelf } from '../../components/BooksOnShelf/BooksOnShelf';
import FavoritesBooks from '../../components/books-in-favorites/FavoritesBooks';
import { useState } from 'react';
import { Group, Panel } from '@vkontakte/vkui';

type Props = {
  id: string
}

export default function Profile({ id }: Props) {
  const [position, setPosition] = useState<any>('shelf');

  return (
    <Panel id={id}>
      <CustomHeader />
      <UserInfo />
      <Group>
        <SegmentedControlCustom position={position} setPosition={setPosition} />
        {position === 'shelf' ? <BooksOnShelf /> : <FavoritesBooks />}
      </Group>
    </Panel>
  )
}