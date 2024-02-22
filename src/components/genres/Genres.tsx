import { useEffect, useState } from "react"
import { getGenres } from "../../api/server/genres/genres"

import { Icon24BrainOutline } from '@vkontakte/icons';

import { CardScroll, Card, Group, Header } from "@vkontakte/vkui"

export default function Genres() {

  const [genres, setGenres] = useState<any[] | null>(null);

  useEffect((): any => {
    const data = getGenres();
    setGenres(data);
  }, [])

  return (
    <Group>
      <Header mode="primary">
        Жанры
      </Header>
      <CardScroll size='s'>
        {genres && genres.map(ganre => (
          <Card className="card" key={ganre.id}>
            <div className="card__wrapper">
              <div className="card__icon">
                <Icon24BrainOutline style={{color: '#2688EB'}} />
              </div>
              <div className="card__content">
                <span className="card__text">{ganre.title}</span>
              </div>
            </div>
          </Card>
        ))}
      </CardScroll>
    </Group>
  )
}