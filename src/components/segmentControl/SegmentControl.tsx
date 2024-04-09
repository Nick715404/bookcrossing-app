import '../../styles/components/segmentControl.scss'

import { segmentControlsOption } from "../../constants/utils";
import { Div, Group, SegmentedControl } from "@vkontakte/vkui";
import React from 'react';

type Props = {
    position?: string
    setPosition: (e: any) => void
}

const SegmentedControlCustom = ({ position, setPosition }: Props) => {
    return (
        <Div>
            <SegmentedControl
                className='segmentControl'
                size='m'
                name='myBookAndFavorites'
                value={position}
                onChange={(value) => setPosition(value)}
                options={segmentControlsOption}
            />
        </Div>
    )
}

export default React.memo(SegmentedControlCustom);
