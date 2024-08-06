import {ColorBadgeCellProps} from './props.ts'
import {Cell} from '../../../../shared/ui/table'
import {ColorBadge} from '../../../../shared/ui/color-badge'

export function ColorBadgeCell(props: ColorBadgeCellProps) {
  return (
    <Cell
      styles={props.cellStyles}
    >
      <ColorBadge {...props.colorBadgeProps}/>
    </Cell>
  )
}
