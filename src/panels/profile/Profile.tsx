import { Card, Panel, PanelHeader, Group, Div } from '@vkontakte/vkui';
import User from '../../components/user/User';
import SegmentedControlCustom from '../../components/segmentControl/SegmentControl';

type Props = {
  id: string
}

export default function Profile({ id }: Props) {
  return (
    <Panel id={id}>

      <PanelHeader separator={false}>
        Буккроссинг
      </PanelHeader>

      <Group separator='hide'>
        <User />
      </Group>

      <SegmentedControlCustom />

      <Group>
        {/*<Relevants />*/}
        <Div>
          <Card>

          </Card>
        </Div>


      </Group>

    </Panel>
  )
}