import {DropdownItemProps} from './props.ts'
import {DropdownItemContainer} from './styles.ts'
import {Typography} from '../../../typography/typography.tsx'
import DropdownCheck from '../../../../assets/icons/dropdown-check.svg?react'

export function DropdownItem(props: DropdownItemProps) {
  return (
    <DropdownItemContainer
      onClick={props.onClick}
      checked={props.checked}
    >
      <Typography
        name={'12'}
        styles={{
          flex: 1,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }}
      >
        {props.children}
      </Typography>
      {
        props.checked && <DropdownCheck/>
      }
    </DropdownItemContainer>
  )
}
