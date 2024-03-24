import {
  Icon24BookmarkOutline,
  Icon24Bookmark,
  Icon24BookmarkCheckBadge
} from '@vkontakte/icons';
import { useState } from 'react';

type Props = {
  id: string
}

export default function ToFav({ id }: Props) {

  const [acitive, setActive] = useState<boolean>(false);

  const fakeHandleClick = (e: any) => {
    e.preventDefault();
    setActive(!acitive);
  }

  return (
    <div
      onClick={() => setActive(!acitive)}
      className='to-shelf-btn'>
      {acitive ? <Icon24Bookmark fill='#99A2AD' /> : <Icon24BookmarkOutline fill='#99A2AD' />}
    </div>
  )
}