import { Button } from "@vkontakte/vkui"

type Props = {
  text: string
  isLoading?: boolean
  isStretched?: boolean
  size?: "s" | "m" | "l" | undefined
  type: 'submit' | any
}

export default function CustomButton({ text, isLoading, isStretched, size, type }: Props) {
  return (
    <Button
    type={type}
      stretched={isStretched}
      size={size}
      loading={isLoading}
    >{text}</Button>
  )
}