import {DropdownProps} from './props.ts'
import {FreespaceToClose, ModalWindowWrapper} from './styles.ts'
import {DropdownModalWindow} from '../dropdown-modal-window/dropdown-modal-window.tsx'
import {DropdownWithIconOnly, DropdownWithText} from './markups.tsx'

export function Dropdown(props: DropdownProps) {
  return (
    <div style={{
      position: 'relative',
      display: 'inline-block'
    }}>
      {
        props.showIconOnly
          ? <DropdownWithIconOnly {...props}/>
          : <DropdownWithText {...props}/>
      }
      {
        props.showModal && <FreespaceToClose onClick={props.onDropdownClick}/>
      }
      <ModalWindowWrapper
        modalAlignment={props.modalAlignment}
        show={props.showModal}
      >
        <DropdownModalWindow
          items={props.items}
          selectedItemIndex={props.selectedItemIndex}
          onSelect={(index: number) => {
            props?.onSelectItemIndex?.(index)
          }}
          hidden={!props.showModal}
        />
      </ModalWindowWrapper>
    </div>
  )
}
