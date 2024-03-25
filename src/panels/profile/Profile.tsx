import User from '../../components/user/User';
import SegmentedControlCustom from '../../components/segmentControl/SegmentControl';
import { useState } from 'react';
import { Panel, PanelHeader, Group } from '@vkontakte/vkui';
import BooksOnShelf from '../../components/books-on-shelf/BooksOnShelf';

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
      <BooksOnShelf />
    </Panel>
  )
}