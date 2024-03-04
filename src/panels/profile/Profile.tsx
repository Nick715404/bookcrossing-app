import { Card, Panel, PanelHeader, Group, Cell, SegmentedControl, Avatar, Div } from '@vkontakte/vkui';
import User from '../../components/user/User';
import Relevants from '../../components/relevant/Relevants';
import SegmentedControlCustom from '../../components/segmentControl/SegmentControl';
import Book from '../../components/book/Book';

type Props = {
  id: string
}

export default function Profile({ id }: Props) {
  return (
    <Panel id={id}>

      <PanelHeader>
        Буккроссинг
      </PanelHeader>

      <Group separator='hide'>
        <User />
      </Group>

      <SegmentedControlCustom />

      <Group>
        {/* <Book />
        <Book />
        <Book />
        <Book /> */}
      </Group>

    </Panel>
  )
}