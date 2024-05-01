import React, { useState } from 'react';
import { ModalPage, ModalPageHeader } from '@vkontakte/vkui';

import { onboardingPages } from '../../constants/onboarding-pages';
import { OnboardingPage } from '../../panels/onboarding/OnboardingPage';

interface Props {
  id?: string;
  onMenu?: boolean;
}

const OnboardingModal = ({ id, onMenu }: Props) => {
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
      size="m"
      settlingHeight={100}
      header={
        <ModalPageHeader>Приветствуем!</ModalPageHeader>
      }
    >
      <OnboardingPage
        onMenu={onMenu}
        page={onboardingPages[currentPageIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </ModalPage>
  );
};

export default OnboardingModal;
