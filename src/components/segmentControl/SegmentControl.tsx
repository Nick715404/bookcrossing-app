import { Div, Group, SegmentedControl } from "@vkontakte/vkui";
import '../../styles/components/segmentControl.scss'
import { useState } from "react";
import { Value } from "sass";

const SegmentedControlCustom = () => {
    const [selected, changeSelected] = useState('');

    return (
        <Group separator='hide'>
            <Div>
                <SegmentedControl className='.segmentControl' 
                    size='l' 
                    name='myBookAndFavorites' 
                    options={[
                    {
                        label: 'Полка',
                        value: 'polka'
                    },
                    {
                        label: 'Избраное',
                        value: 'favorite'
                    }
                ]}/>
            </Div>
        </Group>
    )
}

export default SegmentedControlCustom;
