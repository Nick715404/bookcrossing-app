import { IPassIdToModalPage } from "../../../interfaces/interface";
import "../../../styles/components/transcriptionIsbn.scss"
import React from "react";
import { ModalCardBase, Spacing, Button } from "@vkontakte/vkui";

const ModalAcceptDelete = ({ id }: IPassIdToModalPage) => {
  return (
    <ModalCardBase
      id={id}
      dismissLabel="Закрыть"
      style={{ width: 450, marginBottom: 20 }}
      header="Десктопная и планшетная версии с крестиком внутри"
      subheader="Сверху будет безопасный отступ до иконки"
      actions={
        <React.Fragment>
          <Spacing size={16} />
          <Button size="l" mode="primary" stretched>
            Некая кнопка
          </Button>
        </React.Fragment>
      }
    />
  )
}

export default ModalAcceptDelete;