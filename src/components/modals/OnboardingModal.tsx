import React, { useState } from 'react';
import { ModalPage, ModalPageHeader, Div, IconButton } from '@vkontakte/vkui';
import { Icon28ChevronLeftOutline, Icon28ChevronRightOutline } from '@vkontakte/icons';

import { onboardingPages } from '../../constants/onboarding-pages';
import { setStatusActiveModal } from '../../store/activeModal';
import { OnboardingPage } from '../../panels/onboarding/OnboardingPage';

interface Props {
  id: string;
}

const OnboardingModal = ({ id }: Props) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleNext = () => {
    if (currentPageIndex < onboardingPages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  return (
    <ModalPage
      id={id}
      onClose={() => setStatusActiveModal(null)}
      size="m"
      settlingHeight={100}
    >
      <OnboardingPage
        data={onboardingPages[currentPageIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </ModalPage>
  );
};

export default OnboardingModal;
