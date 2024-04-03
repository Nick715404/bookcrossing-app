import { useRouteNavigator, useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";
import { Tabbar, TabbarItem } from "@vkontakte/vkui"
import { Icon24UserCircleOutline, Icon24ServicesOutline, Icon24AddSquareOutline, Icon24HomeHeartOutline, Icon24HomeOutline } from '@vkontakte/icons';

export default function Nav() {

  const navigator = useRouteNavigator();
  const { panel: activePanel } = useActiveVkuiLocation();

  return (
    <Tabbar style={{ paddingTop: '5px' }}>
      <TabbarItem
        selected={activePanel === 'profile-panel'}
        text='Профиль'
        onClick={() => navigator.push('/profile')} style={{ width: "auto", paddingBottom: "12px" }}>
        <Icon24UserCircleOutline />
      </TabbarItem>
      <TabbarItem
        selected={activePanel === 'catalog-panel'}
        text='Каталог'
        onClick={() => navigator.push('/')} style={{ width: "auto", paddingBottom: "12px" }}>
        <Icon24HomeOutline />
      </TabbarItem>
      <TabbarItem
        selected={activePanel === 'create-panel'}
        text='Добавить'
        onClick={() => navigator.push('/create')} style={{ width: "auto", paddingBottom: "12px" }}>
        <Icon24AddSquareOutline />
      </TabbarItem>
    </Tabbar>
  )
}