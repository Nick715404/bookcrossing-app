import { Panel, PanelHeader } from '@vkontakte/vkui';
import CreateBook from '../../components/forms/create-book/CreateBook';
import CustomHeader from '../../components/header/CustomHeader';

type Props = {
  id: string
}


export default function Create({ id }: Props) {
  return (
    <Panel id={id}>
      <PanelHeader style={{display: 'flex', marginRight: 'auto', marginLeft: '20px'}}>
        <CustomHeader />
      </PanelHeader>
      <CreateBook />
    </Panel>
  )
}