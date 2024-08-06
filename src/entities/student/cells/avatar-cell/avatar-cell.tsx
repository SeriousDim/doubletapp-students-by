import {AvatarCellProps} from './props.ts'
import {Cell} from '../../../../shared/ui/table'
import {Avatar} from '../../../../shared/ui/avatar'

export function AvatarCell(props: AvatarCellProps) {
  return (
    <Cell
      styles={props.cellStyles}
    >
      <Avatar {...props.avatarProps}/>
    </Cell>
  )
}
