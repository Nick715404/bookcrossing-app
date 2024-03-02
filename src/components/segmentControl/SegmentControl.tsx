import { Div, Group, SegmentedControl } from "@vkontakte/vkui";
import '../../styles/components/segmentControl.scss'

const SegmentedControlCustom = () => {
    return (
        <Group separator='hide'>
            <Div>
                <SegmentedControl className='.segmentControl {
' 
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
