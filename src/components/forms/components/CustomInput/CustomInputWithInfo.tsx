import { Icon24Info } from "@vkontakte/icons";
import { CellButton, Div, FormItem, Input, InputProps, Text } from "@vkontakte/vkui";
import { setStatusActiveModal } from "../../../../store/activeModal";

interface Props extends InputProps {
  id: string;
  placeholder: string;
  name: string;
  value?: string;
  type: string;
  isRequired?: boolean;
}

interface IFormItem {
  //top: string;
  nameBlock: string;
  htmlFor: string;
  goToModal: string;
}

export default function CustomInputWithInfo({ nameBlock, htmlFor, goToModal, isRequired, ...props }: Props & IFormItem) {
  return (
    <>
        <Div style={{paddingBottom: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px'}}>
            <Text style={{fontSize: "14px", color: '#6D7885', textWrap: 'nowrap'}}>{nameBlock}</Text>
            <CellButton className="bookInfo" style={{ padding: 0, width: 'auto'}}>
                <Icon24Info onClick={() => setStatusActiveModal(goToModal)} style={{padding: 0}}/>
            </CellButton>
        </Div>
        <FormItem htmlFor={htmlFor} style={{paddingTop: 0, marginTop: '-5px'}}>
            <Input {...props} required={isRequired} />
        </FormItem>
    </>
  );
}
