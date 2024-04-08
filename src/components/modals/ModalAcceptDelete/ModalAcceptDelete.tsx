import "../../../styles/components/transcriptionIsbn.scss"

import { IPassIdToModalPage } from "../../../interfaces/interface";
import { deleteBookFX } from "../../../api/server/books/books";

import { Icon56DeleteOutline } from "@vkontakte/icons";
import { useUnit } from "effector-react";
import {
  ModalCardBase,
  Spacing,
  Button,
  Div,
  Group,
  Text,
  ButtonGroup,
  ModalCard
} from "@vkontakte/vkui";
import { $statusActiveModal, setStatusActiveModal } from "../../../store/activeModal";
import { useEffect } from "react";


const ModalAcceptDelete = ({ id, onClose }: IPassIdToModalPage) => {

  const status = useUnit($statusActiveModal);
  console.log(status);

  useEffect(() => {
    console.log(status);
  }, [status])

  return (
    <ModalCard>
      <ModalCardBase
        id={id}
        dismissLabel="Закрыть"
        style={{ alignContent: 'center', margin: '20px 20px 20px' }}
        icon={<Icon56DeleteOutline />}
      >
        <Div style={{ display: "flex", flexDirection: "column", paddingTop: 0 }}>
          <Group>
            <Text weight="1" style={{ fontSize: "20px", textAlign: "center" }}>
              Вы уверены, что хотите удалить книгу из каталога?
            </Text>
            <Spacing size={12} />
            <Text style={{ textAlign: "center", marginBottom: '10px' }}>
              Удалив книгу из каталога, вы не сможете её востановить
            </Text>
          </Group>
        </Div>
        <ButtonGroup>
          <Button
            size="m"
            mode="secondary"
            stretched
            onClick={() => {
              setStatusActiveModal(null);
              onClose();
            }}
          >
            Отменить
          </Button>
          <Button size="m" mode="primary" stretched>
            Удалить
          </Button>
        </ButtonGroup>
      </ModalCardBase>
    </ModalCard>
  )
}

export default ModalAcceptDelete;