import { vkGreyColor } from '../../../constants/utils';
import { Icon56CheckCircleDeviceOutline } from '@vkontakte/icons';
import { Button, Div, Header, Text } from "@vkontakte/vkui";

type Props = {
  action: () => void
}

export default function CompleteForm({ action }: Props) {

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
        <span style={{ fontSize: '20px' }}>Книга сохранена!</span>
      </Header>
      <Div>
        <Text>Спасибо! Книга добавлена в каталог</Text>
      </Div>
      <Div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button size='l' onClick={action}>Добавить еще одну</Button>
        {/* <Button appearance='overlay' size='l'>Поделиться</Button> */}
      </Div>
    </Div>
  )
}