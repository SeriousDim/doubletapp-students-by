import {DropdownModalWindowProps} from './props.ts'
import {DropdownModalWindowContainer, DropdownModalWindowContent} from './styles.ts'
import {DropdownItem} from '../dropdown-item'
import {EmptyLabel} from '../empty-label'

export function DropdownModalWindow({
  ...props
}: DropdownModalWindowProps) {
  return (
    <DropdownModalWindowContainer
      hidden={props.hidden}
    >
      <DropdownModalWindowContent>
        {
          (props.items.length == 0) && <EmptyLabel/>
        }
        {
          props.items.map((item, index) => (
            <DropdownItem
              onClick={() => props?.onSelect?.(index)}
              checked={index === props.selectedItemIndex}
            >
              {item}
            </DropdownItem>
          ))
        }
      </DropdownModalWindowContent>
    </DropdownModalWindowContainer>
  )
}
