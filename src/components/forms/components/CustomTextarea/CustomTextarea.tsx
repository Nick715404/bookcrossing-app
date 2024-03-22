import { FormItem, Textarea } from "@vkontakte/vkui";

type Props = {}

export default function CustomTextarea({ }: Props) {
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
      />
    </FormItem>
  )
}