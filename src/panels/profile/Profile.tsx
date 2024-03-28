import User from '../../components/user/User';
import SegmentedControlCustom from '../../components/segmentControl/SegmentControl';
import BooksOnShelf from '../../components/books-on-shelf/BooksOnShelf';
import FavoritesBooks from '../../components/books-in-favorites/FavoritesBooks';
import { useEffect, useState } from 'react';
import { Group, Panel, PanelHeader } from '@vkontakte/vkui';

type Props = {
  id: string
}

export default function Profile({ id }: Props) {

  const [position, setPosition] = useState<any>('shelf');

  return (
    <Panel id={id}>
      <PanelHeader separator={false}>
        Буккроссинг
      </PanelHeader>
      <Group separator='hide'>
        <User />
      </Group>

      <SegmentedControlCustom position={position} setPosition={setPosition} />

      {position === 'shelf' ? <BooksOnShelf /> : <FavoritesBooks />}

    </Panel>
  )
}