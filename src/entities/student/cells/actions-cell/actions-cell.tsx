import {ActionCellProps} from './props.ts'
import {Cell} from '../../../../shared/ui/table'
import {ActionBar} from './action-bar.tsx'

export function ActionsCell(props: ActionCellProps) {
  return (
    <Cell
      styles={props.cellStyles}
    >
      <ActionBar actions={props.actions}/>
    </Cell>
  )
}
