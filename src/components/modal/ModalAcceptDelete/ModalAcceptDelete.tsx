import { IPassIdToModalPage } from "../../../interfaces/interface";
import "../../../styles/components/transcriptionIsbn.scss"
import React from "react";
import { ModalCardBase, Spacing, Button, AdaptivityProvider, ViewWidth, Div, Group, Text, ButtonGroup } from "@vkontakte/vkui";
import { deleteBookFX } from "../../../api/server/books/books";
import { Icon56DeleteOutline } from "@vkontakte/icons";

type Props = {
  bookId: string
}


const ModalAcceptDelete = ({ id }: IPassIdToModalPage, {bookId}: Props) => {
  const handleDeleteBook = async () => {
    deleteBookFX(bookId);
  };

  return (
    <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
      <ModalCardBase
      id={id}
      dismissLabel="Закрыть"
      style={{ width: 320, marginBottom: 20 , alignContent: 'center'}}
      icon={<Icon56DeleteOutline />}
    >
      <Div style={{display: "flex", flexDirection: "column", paddingTop: 0}}>
          <Group>
            <Text weight="1" style={{fontSize: "20px", textAlign: "center"}}>
              Вы уверены, что хотите удалить книгу из каталога?
            </Text>
            <Spacing size={12} />
            <Text style={{ textAlign: "center"}}>
              Удалив книгу из каталога, вы не сможете её востановить
            </Text>
          </Group>
      </Div>
      <ButtonGroup>
          <Button size="m" mode="secondary" stretched>
            Отменить
          </Button>
          <Button size="m" mode="primary" stretched onClick={handleDeleteBook}>
            Удалить
          </Button>
      </ButtonGroup>
    </ModalCardBase>
    </AdaptivityProvider>
  )
}

export default ModalAcceptDelete;