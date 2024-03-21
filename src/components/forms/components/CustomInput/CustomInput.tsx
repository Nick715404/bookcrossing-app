import { FormItem, Input, InputProps } from "@vkontakte/vkui";

interface Props extends InputProps {
  id: string;
  placeholder: string;
  name: string;
  value?: string;
  type: string;
  isRequired?: boolean;
}

interface IFormItem {
  top: string;
  htmlFor: string;
}

export default function CustomInput({ htmlFor, top, isRequired, ...props }: Props & IFormItem) {
  return (
    <FormItem top={top} htmlFor={htmlFor}>
      <Input {...props} required={isRequired} />
    </FormItem>
  );
}
