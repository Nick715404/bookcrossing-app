import User from '../../components/user/User';
import SegmentedControlCustom from '../../components/segmentControl/SegmentControl';
import BooksOnShelf from '../../components/books-on-shelf/BooksOnShelf';
import FavoritesBooks from '../../components/books-in-favorites/FavoritesBooks';

import { useState } from 'react';
import { Group, Panel, PanelHeader } from '@vkontakte/vkui';
import CustomHeader from '../../components/header/CustomHeader';

type Props = {
  id: string
}

export default function Profile({ id }: Props) {

  const [position, setPosition] = useState<any>('shelf');

  return (
    <Panel id={id}>
      <PanelHeader>
        <CustomHeader />
      </PanelHeader>
      <User />
      <Group>
        <SegmentedControlCustom position={position} setPosition={setPosition} />
        {position === 'shelf' ? <BooksOnShelf /> : <FavoritesBooks />}
      </Group>

    </Panel>
  )
}