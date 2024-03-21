import { Card, Panel, PanelHeader, Group, Cell, SegmentedControl, Avatar, Div } from '@vkontakte/vkui';
import User from '../../components/user/User';
import Relevants from '../../components/relevant/Relevants';
import SegmentedControlCustom from '../../components/segmentControl/SegmentControl';
<<<<<<< HEAD
// import MyBook from '../../components/myBook/MyBook';
=======
import MyBook from '../../components/myBook/MyBook';
>>>>>>> 65cfac3c623fb4633ce34251c084129ae010b54d

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
<<<<<<< HEAD
          {/* <MyBook /> */}
=======
          <MyBook />
>>>>>>> 65cfac3c623fb4633ce34251c084129ae010b54d
        </Card>
        </Div>
        
          
      </Group>

    </Panel>
  )
}