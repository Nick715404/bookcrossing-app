import { Icon24Add, Icon24Delete, Icon24DeleteArrowUpOutline, Icon24DeleteOutline, Icon24EditorCutOutline, Icon24EducationOutline, Icon24Message, Icon24MessageAddBadgeOutline, Icon24MessageBadge, Icon24MessageOutline, Icon24PenOutline, Icon24RemoveCircle, Icon24Upload } from "@vkontakte/icons";
import { Div, Card, Image, SimpleCell, Text,  IconButton, Button, Group} from "@vkontakte/vkui";
import '../../styles/components/myBook.scss'
import CardControlButtons from "./cardControlButtons/CardControlButtons";

export default function MyBook() {
    const image = (
        <Image
            style={{marginBottom: '0', marginTop: '0'}}
            className="book-img"
            borderRadius="m"
            size={96}
            src="https://fashionelite.com/wp-content/uploads/2016/09/1331144712_IMG_paris1.jpg" 
        />
    )
    
    return (
        <Div className="cardMyBook">
            {/*<Group className="blocImage" separator="hide">*/}
                <SimpleCell className="imgBook" before={image}>
                <Group className=" " separator="hide">
                    <Group className="textMyBook" separator="hide">
                        <Text weight="1" className="book-title">
                            Атлант расправил плечи
                        </Text>

                        <Text className="book-author book-info">
                            Энтони Берджес
                        </Text>

                        <Text className="book-quality book-info">
                            Отличное
                        </Text>

                        <Text className="book-genre book-info">
                            Детектив
                        </Text>

                        <Text className="book-asbn book-info">
                            199148-12881
                        </Text>
                    </Group>
                    {/*<Group className="buttonMyBook">
                        <Button>
                            Редактировать
                        </Button>
                    </Group>*/}
                </Group>
                </SimpleCell>
            {/*</Group>*/}
                
            <Group className="controlBtn">
                <CardControlButtons />
            </Group>
        </Div>
    )

    /*return (
        <Div className="book">
            <SimpleCell className="book-wrapper" before={image}>
                <Text
                    weight="1"
                    className="book-title">
                    Атлант расправил плечи
                </Text>
                <Text className="book-author">
                    Энтони Бёрджесс
                </Text>
                <Button className="book-btn">
                    Редактировать
                </Button>
            </SimpleCell>
    </Div >
    )*/
}