import { IBook } from "../../interfaces/interface";
import { $books } from "../../store/books";

import Book from "../book/Book"
import ToFav from "../toFav/toFav";
import ToChat from "../toChat/toChat";
import EmptyPlate from "../empty-plate/EmptyPlate";

import { useUnit } from "effector-react";
import { Header } from "@vkontakte/vkui"
import { Icon28AllCategoriesOutline } from '@vkontakte/icons';
import { vkBlueColor } from "../../constants/utils";
import CatalogBookList from "../CatalogBookList/CatalogBookList";
import { useState } from "react";
import { LOADING_STATUS } from "../../constants/loadingStatus";

export default function Relevants() {

  const [errors, setErrors] = useState();
  const [status, setStatus] = useState(LOADING_STATUS.IDLE);

  return (
    <>
      <Header mode="primary" style={{ paddingBottom: '12px' }}>
        <span style={{ fontSize: '18px' }}>Новые</span>
      </Header>
      <CatalogBookList />
    </>
  )
}