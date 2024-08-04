import {EmptyLabel} from '../empty-label'
import {SelectedItem} from './selected-item.tsx'
import {DropdownContainer, DropdownWithIconOnlyContainer} from './styles.ts'
import {DropdownProps} from './props.ts'
import DropdownArrowDown from '../../../../assets/icons/dropdown-arrow-down.svg?react'

export function DropdownWithText({
  width,
  Icon,
  ...props
}: DropdownProps) {
  return (
    <DropdownContainer
      width={width}
      onClick={() => {
        props?.onDropdownClick?.()
      }}
    >
      {
        props.items.length === 0
          ? <EmptyLabel/>
          : <SelectedItem item={props.items[props.selectedItemIndex]}/>
      }
      {
        Icon && <Icon/>
      }
      {
        !Icon && <DropdownArrowDown/>
      }
    </DropdownContainer>
  )
}

export function DropdownWithIconOnly({
  Icon,
  ...props
}: DropdownProps) {
  return (
    <DropdownWithIconOnlyContainer
      onClick={() => {
        props?.onDropdownClick?.()
      }}
    >
      {
        Icon && <Icon/>
      }
      {
        !Icon && <DropdownArrowDown/>
      }
    </DropdownWithIconOnlyContainer>
  )
}
