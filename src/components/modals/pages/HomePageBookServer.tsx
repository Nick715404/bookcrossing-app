import { $favBooks } from "../../../store/favorites";
import { useParams, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { useCurrentBook } from "../../../hooks/useCurrentBook";
import { useFetchUserCity } from "../../../hooks/useFetchUserCity";
import { checkBookInFavorites } from "../../../utilities/books/books.utils";
import { useUnit } from "effector-react";
import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Group
} from "@vkontakte/vkui";
import BookDetails from "./BookDetails";
import BookActions from "./BookActions";
import { useEffect, useState } from "react";
import { PageBookSkeleton } from "./PageBookSkeleton";

type Props = {
  id: string;
};

const HomePageBook = ({ id }: Props) => {
  const params = useParams();
  const paramsId = params?.id;
  const navigator = useRouteNavigator();
  const [favorites] = useUnit([$favBooks]);

  const { data, isFetching: fetchingBook } = useCurrentBook({ bookId: '', paramsId: paramsId });
  const { data: owner, } = useFetchUserCity({ userVkId: data?.owner });

  const isFavorite = data && checkBookInFavorites(data, favorites);

  const [ownerCity, setOwnerCity] = useState(null);

  useEffect(() => {
    if (owner && owner.city) {
      setOwnerCity(owner.city);
    } else {
      setOwnerCity(null);
    }
  }, [owner]);

  return (
    <>
      {
        data &&
        <Panel id={id}>
          <PanelHeader before={<PanelHeaderBack label="Назад" onClick={() => navigator.back()} />}>
            Буккроссинг
          </PanelHeader>
          <Group className="modalPage">
            {
              fetchingBook
                ?
                <PageBookSkeleton />
                :
                <BookDetails
                  isLoading={fetchingBook}
                  book={data}
                  ownerCity={owner ? owner.city : null}
                  isFavorite={isFavorite}
                />
            }
            <BookActions
              ownerId={data.owner}
            />
          </Group>
        </Panel>
      }
    </>
  );
};

export default HomePageBook;
