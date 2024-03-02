import { Icon24Message, Icon24MessageAddBadgeOutline, Icon24MessageBadge, Icon24MessageOutline } from "@vkontakte/icons";
import { Div, Card, Image, SimpleCell, Text,  IconButton, Button, Group} from "@vkontakte/vkui";
import '../../styles/components/myBook.scss'

export default function MyBook() {
    const image = (
        <Image
            style={{marginBottom: '0', marginTop: '0'}}
            className="book-img"
            borderRadius="m"
            src="https://fashionelite.com/wp-content/uploads/2016/09/1331144712_IMG_paris1.jpg" 
        />
    )
    
    return (
            <div className="cardMyBook">
                <div className="blocImage">
                    <SimpleCell before={image} />
                </div>
                <div className=" ">
                    <div className="textMyBook">
                        <Text
                            weight="1">
                            Атлант расправил плечи
                        </Text>

                        <Text
                            weight="3">
                            Энтони Берджес
                        </Text>
                    </div>
                    <div className="buttonMyBook">
                        <Button>
                            Редактировать
                        </Button>
                    </div>
                </div>
                <div className="iconBtn">
                    <IconButton>
                        <Icon24MessageOutline />
                    </IconButton>
                </div>
            </div>
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