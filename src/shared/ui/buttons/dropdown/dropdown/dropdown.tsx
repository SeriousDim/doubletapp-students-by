import {DropdownProps} from './props.ts'
import {DropdownContainer, ModalWindowWrapper} from './styles.ts'
import DropdownArrowDown from '../../../../assets/icons/dropdown-arrow-down.svg?react'
import {EmptyLabel} from '../empty-label'
import {DropdownModalWindow} from '../dropdown-modal-window/dropdown-modal-window.tsx'
import {SelectedItem} from './selected-item.tsx'

export function Dropdown({
  width,
  Icon,
  ...props
}: DropdownProps) {
  return (
    <div style={{
      position: 'relative'
    }}>
      <DropdownContainer
        width={width}
        onClick={() => {
          props?.onDropdownClick?.()
        }}
      >
        {
          !props.showIconOnly && (
            props.items.length === 0
              ? <EmptyLabel/>
              : <SelectedItem item={props.items[props.selectedItemIndex]}/>
          )
        }
        {
          Icon && <Icon/>
        }
        {
          !Icon && <DropdownArrowDown/>
        }
      </DropdownContainer>
      <ModalWindowWrapper
        modalAlignment={props.modalAlignment}
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
