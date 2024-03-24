import User from '../../components/user/User';
import SegmentedControlCustom from '../../components/segmentControl/SegmentControl';
import { useState } from 'react';
import { Panel, PanelHeader, Group } from '@vkontakte/vkui';

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

      <Group>
        Книги на полке
      </Group>

    </Panel>
  )
}