import { useRouteNavigator, useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";
import { Tabbar, TabbarItem } from "@vkontakte/vkui"
import {
  Icon24UserCircleOutline,
  Icon24AddSquareOutline,
  Icon24HomeOutline
} from '@vkontakte/icons';

export default function Nav() {
  const navigator = useRouteNavigator();
  const { panel: activePanel } = useActiveVkuiLocation();
  const isChooseCityActive = activePanel === 'choose-city-panel';

  return (
    <Tabbar>
      <TabbarItem
        disabled={isChooseCityActive}
        selected={activePanel === 'profile-panel'}
        text='Профиль'
        onClick={() => navigator.push('/profile')} style={{ width: "auto", paddingBottom: "12px" }}>
        <Icon24UserCircleOutline />
      </TabbarItem>
      <TabbarItem
        disabled={isChooseCityActive}
        selected={activePanel === 'catalog-panel'}
        text='Каталог'
        onClick={() => navigator.push('/')} style={{ width: "auto", paddingBottom: "12px" }}>
        <Icon24HomeOutline />
      </TabbarItem>
      <TabbarItem
        disabled={isChooseCityActive}
        selected={activePanel === 'create-panel'}
        text='Добавить'
        onClick={() => navigator.push('/create')} style={{ width: "auto", paddingBottom: "12px" }}>
        <Icon24AddSquareOutline />
      </TabbarItem>
    </Tabbar>
  )
}