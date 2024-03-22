import { Div, Group, SegmentedControl } from "@vkontakte/vkui";
import '../../styles/components/segmentControl.scss'
import { segmentControlsOption } from "../../constants/utils";
import { useState } from "react";

type Props = {
    position?: string
    setPosition: (e: any) => void
}

const SegmentedControlCustom = ({ position, setPosition }: Props) => {

    // const [position, setPosition] = useState<any>('shelf');

    return (
        <Group separator='hide'>
            <Div>
                <SegmentedControl
                    className='.segmentControl'
                    size='l'
                    name='myBookAndFavorites'
                    value={position}
                    onChange={(value) => setPosition(value)}
                    options={segmentControlsOption}
                />
            </Div>
        </Group>
    )
}

export default SegmentedControlCustom;
