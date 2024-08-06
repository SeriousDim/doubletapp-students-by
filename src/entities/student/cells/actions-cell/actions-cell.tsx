import {ActionCellProps} from './props.ts'
import {Cell} from '../../../../shared/ui/table'
import {IconedButton} from '../../../../shared/ui/buttons/iconed-button'

export function ActionsCell(props: ActionCellProps) {
  return (
    <Cell
      styles={props.cellStyles}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '4px'
        }}
      >
        {props.actions.map(item => (
          <IconedButton {...item}/>
        ))}
      </div>
    </Cell>
  )
}
