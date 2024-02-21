// import { Tabbar, TabbarItem } from "@vkontakte/vkui"
import { Tabbar, TabbarItem } from "@vkontakte/vkui"
import { Icon24UserCircleOutline, Icon24ServicesOutline, Icon24AddSquareOutline } from '@vkontakte/icons';

export default function Nav() {
  return (
    <Tabbar>
      <TabbarItem text='Профиль'>
        <Icon24UserCircleOutline />
      </TabbarItem>
      <TabbarItem text='Каталог'>
        <Icon24ServicesOutline />
      </TabbarItem>
      <TabbarItem text='Добавить'>
        <Icon24AddSquareOutline />
      </TabbarItem>
    </Tabbar>
  )
}