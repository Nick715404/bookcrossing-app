import { Div, Button } from "@vkontakte/vkui";

type BookActionsProps = {
  ownerId: number;
};

const BookActions = ({ ownerId }: BookActionsProps) => (
  <Div style={{ marginTop: '40px' }}>
    <Button href={`https://vk.com/im?sel=${ownerId}`} size="l" stretched>
      Написать владельцу
    </Button>
  </Div>
);

export default BookActions;
