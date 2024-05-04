export interface IOnboardingPage {
  id: string;
  title: string;
  text: string;
  imgPath: string;
}

export const onboardingPages = [
  {
    id: '1',
    title: 'Добро пожаловать в буккросcинг.рф!',
    text: 'Мы предлагаем вам экологично использовать книги!',
    imgPath: `/img/onboarding/page1.png`
  },
  {
    id: '2',
    title: 'Буккроссинг — это обмен книгами.',
    text: 'Работает по принципу: «Надо — возьми, не надо — отдай»',
    imgPath: `/img/onboarding/page2.png`
  },
  {
    id: '3',
    title: 'Книговорот',
    text: 'В мини-приложении вы можете найти интересующую вас книгу и связаться с владельцем для её получения. Или добавить ненужную вам книгу в каталог, где новый владелец обязательно найдет её',
    imgPath: `/img/onboarding/page3.png`
  },
  {
    id: '4',
    title: 'Жанры и поиск',
    text: 'В приложение есть разделение книг по жанрам и поиск, который упростит подбор интересующих именно вас произведений',
    imgPath: `/img/onboarding/page4.png`
  },
  {
    id: '5',
    title: 'Избранное',
    text: 'Вы можете добавить заинтересовавшую книгу в «Мне понравилось» и написать владельцу позже, если по какой-либо причине не хотите делать это сразу',
    imgPath: `/img/onboarding/unbordingLastPicture.svg`
  },
]