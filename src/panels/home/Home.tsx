import { Panel } from '@vkontakte/vkui';

type Props = {
	id: string
}

export default function Home({ id }: Props) {
	return (
		<Panel id={id}>
			Home
		</Panel>
	)
}
