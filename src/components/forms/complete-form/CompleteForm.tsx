import { vkGreyColor } from '../../../constants/utils';
import { Icon56CheckCircleDeviceOutline } from '@vkontakte/icons';
import { Button, Div, Header, Text } from "@vkontakte/vkui";

type Props = {
  action: () => void;
  state?: 'edit' | 'create'
}

export default function CompleteForm({ action, state }: Props) {

  const styles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '90px'
  }

  return (
    <Div style={styles}>
      <Icon56CheckCircleDeviceOutline fill={vkGreyColor} />
      <Header mode="primary">
        <span style={{ fontSize: '20px' }}>
          {state === 'edit' ? 'Книга обновлена!' : 'Книга сохранена!'}
        </span>
      </Header>
      <Div>
        <Text>
          {state === 'edit' ? 'Книга успешно обновлена' : 'Спасибо! Книга добавлена в каталог'}
        </Text>
      </Div>
      <Div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button size='l' onClick={action}>Вернуться к книгам</Button>
        {/* <Button appearance='overlay' size='l'>Поделиться</Button> */}
      </Div>
    </Div>
  )
}