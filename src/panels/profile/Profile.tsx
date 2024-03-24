import User from '../../components/user/User';
import SegmentedControlCustom from '../../components/segmentControl/SegmentControl';
import { Card, Div, Group, Panel, PanelHeader } from '@vkontakte/vkui';
import { useState } from 'react';
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
        {/*<Relevants />*/}
        <Div>
        <Card>
          {/* <MyBook /> */}
        </Card>
        </Div>
        
          
      </Group>

    </Panel>
  )
}