import {ActionBarProps} from './props.ts'
import {IconedButton} from '../../../../shared/ui/buttons/iconed-button'

export function ActionBar(props: ActionBarProps) {
  return (
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
  )
}
