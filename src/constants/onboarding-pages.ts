export interface IOnboardingPage {
  id: string;
  title: string;
  text: string;
  imgPath: string;
}

export const onboardingPages = [
  {
    id: '1',
    title: 'Добро пожаловать в буккроссинг!',
    text: 'Мы предлагаем вам экологичную альтернативу покупки книг. Буккроссинг — это обмен книгами. В мини-приложении вы можете найти интересующую вас книгу и связаться с владельцем для её получения',
    imgPath: `/img/onboarding/page1.png`
  },
  {
    id: '2',
    title: 'Новые знакомства',
    text: 'Здесь ты можешь познакомиться с интересными людьми по интересам и завести новых другей',
    imgPath: `/img/onboarding/page2.png`
  },
  {
    id: '3',
    title: 'Книговорот',
    text: 'Тебя ждет огромным выбор книг разных жанров. Каждый обязательно найдет что-то для себя',
    imgPath: `/img/onboarding/page3.png`
  },
  {
    id: '4',
    title: 'Поиск вдохновения',
    text: 'С нами ты можешь без проблем найти идеи для новых свершений',
    imgPath: `/img/onboarding/page4.png`
  },
  {
    id: '5',
    title: 'Присоединяйтесь к нам',
    text: 'Счастливых вам голодных игр. И пусть удача всегда будет с вами',
    imgPath: `/img/onboarding/page5.png`
  },
]