import { Icon24DeleteOutline, Icon24PenOutline } from "@vkontakte/icons";
import { Group, IconButton } from "@vkontakte/vkui";

export default function CardControlButtons() {
    return (
        <Group className="iconBtn" separator="hide">
            <IconButton>
                <Icon24DeleteOutline fill='#99A2AD' />
            </IconButton>
            <IconButton>
                <Icon24PenOutline fill='#99A2AD'/>
            </IconButton>
        </Group>
    )
}