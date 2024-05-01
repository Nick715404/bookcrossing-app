import React from 'react'
import { IOnboardingPage } from '../../constants/onboarding-pages';

type Props = {
  page: IOnboardingPage;
  onNext?: () => any
  onPrev?: () => any
}

function OnboardingPage({ page, onNext, onPrev }: Props) {
  return (
    <div>OnboardingPage</div>
  )
}

export { OnboardingPage };