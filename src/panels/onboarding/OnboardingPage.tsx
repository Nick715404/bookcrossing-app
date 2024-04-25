import '../../styles/panels/onboarding.scss';

import { IOnboardingPage } from '../../constants/onboarding-pages';
import { Icon28ChevronLeftOutline, Icon28ChevronRightOutline } from '@vkontakte/icons';
import { Div, Group, IconButton, Panel, PanelHeader, PanelHeaderBack, PanelHeaderButton, Text, Title } from '@vkontakte/vkui';

type Props = {
  data: IOnboardingPage;
  onNext?: () => void;
  onPrev?: () => void;
};

const OnboardingPage = ({ data, onNext, onPrev }: Props) => {
  return (
    <Panel style={{ height: '90dvh' }} id={data.id}>
      <PanelHeader>
        Приветствие!
      </PanelHeader>
      <Group className='onboarding__wrapper'>
        <Div className='onboarding__content'>
          <img className='onboarding__img' src={data.imgPath} alt={data.title} />
          <Title className='onboarding__title' level='1'>
            {data.title}
          </Title>
          <Text className='onboarding__description'>
            {data.text}
          </Text>
        </Div>
      </Group>
      <Div className='nav-buttons-box'>
        <IconButton disabled={data.id === '1' && true} onClick={onPrev} className='nav-button nav-button--prev'>
          <Icon28ChevronLeftOutline />
        </IconButton>
        <IconButton disabled={data.id === '6' && true} onClick={onNext} className='nav-button nav-button--next'>
          <Icon28ChevronRightOutline />
        </IconButton>
      </Div>
    </Panel>
  );
};

export { OnboardingPage };
