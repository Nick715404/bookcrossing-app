import { FormItem, Textarea } from "@vkontakte/vkui";

type Props = {
  value: string | undefined
  onChange: any
}

export default function CustomTextarea({ value, onChange }: Props) {
  return (
    <FormItem
      top='Комментарий'
      htmlFor="bookDescr"
    >
      <Textarea
        id="bookDescr"
        name="bookDescr"
        placeholder="Добавьте комментарий"
        maxLength={200}
        value={value}
        onChange={onChange}
      />
    </FormItem>
  )
}