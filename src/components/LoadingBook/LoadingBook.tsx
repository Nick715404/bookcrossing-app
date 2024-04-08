import { Div, SimpleCell, SplitLayout, Text } from "@vkontakte/vkui";

export default function LoadingBook() {

  return (
    <SplitLayout>
      <Div className="book loading-book">
        <SimpleCell className="book-wrapper">
          <Div className="book-img loading" />
          <Div className="book-content">
            <Text className="book-title loading" weight="1">
            </Text>
            <Text className="book-author book-info loading">
            </Text>
            <Text className="book-quality book-info loading">
            </Text>
            <Text className="book-genre book-info loading">
            </Text>
          </Div>
        </SimpleCell>
      </Div >
    </SplitLayout >
  )
}