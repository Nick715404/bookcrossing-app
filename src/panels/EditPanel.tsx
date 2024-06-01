import { Panel } from '@vkontakte/vkui';
import EditBookF from '../../components/forms/edit-book/EditBookF';
import { CustomHeader } from '../../components';

type Props = { id: string, };

export default function EditPanel({ id }: Props) {
  return (
    <Panel id={id}>
      <CustomHeader withBack />
      <EditBookF />
    </Panel>
  )
}