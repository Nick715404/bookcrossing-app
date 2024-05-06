import { Panel } from "@vkontakte/vkui";
import { OnboardingPage } from "./OnboardingPage";
import { useState } from "react";
import { onboardingPages } from "../../constants/onboarding-pages";

type Props = {
  id: string;
}

const OnboardingRouterPage = ({ id }: Props) => {
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
    <Panel id={id}>
      <OnboardingPage
        page={onboardingPages[currentPageIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </Panel>
  )
}

export { OnboardingRouterPage };