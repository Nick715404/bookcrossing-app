import { CellButton, Div, FormItem, Select, Text } from "@vkontakte/vkui";
import { qualityOptions } from "../../../../constants/utils";
import { Icon24Info } from "@vkontakte/icons";
import { setStatusActiveModal } from "../../../../store/activeModal";

type Props = {
  value: string | undefined
  onChange: (e: any) => void
}

interface IFormItem {
  //top: string;
  nameBlock: string;
  //htmlFor: string;
  goToModal: string;
}

export default function QualitySelect({ nameBlock, goToModal, value, onChange }: Props & IFormItem) {
  return (
    <>
        <Div style={{paddingBottom: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px'}}>
            <Text style={{fontSize: "14px", color: '#6D7885', textWrap: 'nowrap'}}>{nameBlock}</Text>
            <CellButton className="bookInfo" style={{ padding: 0, width: 'auto'}}>
                <Icon24Info onClick={() => setStatusActiveModal(goToModal)} style={{padding: 0}}/>
            </CellButton>
        </Div>
        <FormItem
          htmlFor="bookQuality"
          style={{paddingTop: 0, marginTop: '-5px'}}
        >
        <Select
        id="bookQuality"
          placeholder="Выберите состояние книги"
          name="bookQuality"
          value={value}
          onChange={onChange}
          options={qualityOptions} 
          />
      </FormItem>
    </>
    
  )
}