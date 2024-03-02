import { Card, Panel, PanelHeader, Group, Cell, SegmentedControl, Avatar, Div } from '@vkontakte/vkui';
import User from '../../components/user/User';
import Relevants from '../../components/relevant/Relevants';
import SegmentedControlCustom from '../../components/segmentControl/SegmentControl';
import MyBook from '../../components/myBook/MyBook';
import CardMyBook from '../../components/myBook/cardMyBook/CardMyBook';
import UserBookshelf from '../../components/userBookshelf/UserBookshelf';
import { useState } from 'react';

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
        {/*<Relevants />
        <Div>
          <Card>
            <MyBook />
          </Card>
        </Div>*/}
        
         <UserBookshelf />
      </Group>

    </Panel>
  )
}