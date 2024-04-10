import { $categories } from "../../store/categories"
import { useUnit } from "effector-react"
import { Card, Div, Group, Text } from "@vkontakte/vkui";
import { Icon2416CircleOutline, Icon24BeautyOutline, Icon24BookSpreadOutline, Icon24ChefHatOutline, Icon24HealthOutline, Icon24HieroglyphCharacterOutline, Icon24HorseToyOutline} from "@vkontakte/icons";
import React, { useState } from "react";
import { iconMap } from "../../dictionary/dictionary";

interface IItem {
  id: number;
  title: string;
  iconName: string; // Добавляем поле для хранения имени иконки
}

export default function CategoriesList() {

  const categories = useUnit($categories);

  // const iconMap: any = {
  //   Icon24BookSpreadOutline: <Icon24BookSpreadOutline style={{color: '#2688EB'}} />,
  //   Icon24HieroglyphCharacterOutline: <Icon24HieroglyphCharacterOutline style={{color: '#2688EB'}} />,
  //   Icon24HorseToyOutline: <Icon24HorseToyOutline style={{color: '#2688EB'}} />,
  //   Icon2416CircleOutline: <Icon2416CircleOutline style={{color: '#2688EB'}} />,
  //   Icon24HealthOutline: <Icon24HealthOutline style={{color: '#2688EB'}} />,
  //   Icon24BeautyOutline: <Icon24BeautyOutline style={{color: '#2688EB'}} />,
  //   Icon24ChefHatOutline: <Icon24ChefHatOutline style={{color: '#2688EB'}} />
  // }

  // const IconComponent: React.FC<{iconName: string}> = ({iconName}) => {
  //   switch (iconName) {
  //     case  'Icon24BrainOutline':
  //       return <Icon24BrainOutline style={{ color: '#2688EB' }} />;
  //     case 'Icon24PaletteOutline':
  //       return <Icon24PaletteOutline style={{ color: '#2688EB' }} />;
  //     case 'Icon24EducationOutline':
  //       return <Icon24EducationOutline style={{ color: '#2688EB' }} />;
  //     default:
  //       return null;
  //   }
  // }

  return (
    <>
      {/* List of fetched categories */}
      {categories && categories.map(category => (
        <Card className="card" key={category.id}>
          <Div style={{display: 'flex', alignItems: 'center', gap: 10}} >
            <Div className="card__wrapper" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Group >
                {/* {category.imageName && <IconComponent iconName={category.imageName} />} */}
                {category.imageName && iconMap[category.imageName]}
              </Group>
            </Div>
            <Group className="card__content">
              <Text className="card__text">{category.title}</Text>
            </Group>
          </Div>
        </Card>
      ))}
    </>
  )
}