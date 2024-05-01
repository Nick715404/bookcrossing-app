import '../../styles/panels/onboarding.scss';

import { IOnboardingPage } from '../../constants/onboarding-pages';
import { setStatusActiveModal } from '../../store/activeModal';

import { Icon28ChevronLeftOutline, Icon28ChevronRightOutline } from '@vkontakte/icons';
import { Button, Div, Group, IconButton, Text, Title } from '@vkontakte/vkui';

type Props = {
  page: IOnboardingPage;
  onNext?: () => void;
  onPrev?: () => void;
  onMenu?: boolean;
};

const OnboardingPage = ({ page, onNext, onPrev, onMenu }: Props) => {

  const StartButton = (
    <Button onClick={onMenu ? () => setStatusActiveModal(null) : () => setStatusActiveModal('chooseCity')} size='m'>
      Начать
    </Button>
  );

  return (
    <Group id={page.id}>
      <Group style={{ height: '90dvh' }} className='onboarding__wrapper'>
        <Div className='onboarding__content'>
          <img className='onboarding__img' src={page.imgPath} alt={page.title} />
          <Title className='onboarding__title' level='1'>
            {page.title}
          </Title>
          <Text className='onboarding__description'>
            {page.text}
          </Text>
        </Div>
      </Group>
      <Div className='nav-buttons-box'>
        <IconButton disabled={page.id === '1' && true} onClick={onPrev} className='nav-button nav-button--prev'>
          <Icon28ChevronLeftOutline />
        </IconButton>
        {
          page.id === '5' ? StartButton :
            <IconButton disabled={page.id === '6' && true} onClick={onNext} className='nav-button nav-button--next'>
              <Icon28ChevronRightOutline />
            </IconButton>
        }
      </Div>
    </Group>
  );
};

export { OnboardingPage };
