import { Panel } from '@vkontakte/vkui'
import React from 'react'

type Props = {
  id: string
}

export default function SearchPanel({ id }: Props) {
  return (
    <Panel id={id}>
      Search panel
    </Panel>
  )
}