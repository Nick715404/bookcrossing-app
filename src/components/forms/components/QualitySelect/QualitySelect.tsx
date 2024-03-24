import { FormItem, Select } from "@vkontakte/vkui";
import { qualityOptions } from "../../../../constants/utils";

type Props = {
  value: string | undefined
  onChange: (e: any) => void
}

export default function QualitySelect({ value, onChange }: Props) {
  return (
    <FormItem
      top='Состояние'
      htmlFor="bookQuality"
    >
      <Select
        id="bookQuality"
        placeholder="Выберите состояние книги"
        name="bookQuality"
        value={value}
        onChange={onChange}
        options={qualityOptions} />
    </FormItem>
  )
}