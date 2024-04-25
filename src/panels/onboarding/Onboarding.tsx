import { OnboardingPage } from "./OnboardingPage";
import { onboardingPages } from "../../constants/onboarding-pages";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

import { useState } from "react";
import { Panel } from "@vkontakte/vkui";

type Props = {
  id: string;
}

const Onboarding = ({ id }: Props) => {
  const [pages, setPages] = useState(onboardingPages);
  const router = useRouteNavigator();

  const handleNext = () => {
    const currentIndex = pages.findIndex(page => page.id === id);
    const nextIndex = (currentIndex + 1) % pages.length;
    const nextId = pages[nextIndex].id;
    router.push(`${nextId}`);
  };

  const handlePrev = () => {
    const currentIndex = pages.findIndex(page => page.id === id);
    const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
    const prevId = pages[prevIndex].id;
    router.push(`${prevId}`);
  };

  return (
    <Panel id={id}>
      {
        pages.map(page => (
          <OnboardingPage
            key={page.id}
            data={page}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        ))
      }
    </Panel>
  )
}

export { Onboarding };
