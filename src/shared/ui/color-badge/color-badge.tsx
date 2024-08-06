import {ColorBadgeProps} from './props.ts'
import {ColorBadgeContainer} from './styles.ts'

export function ColorBadge({
  type = 'standard',
  ...props
}: ColorBadgeProps) {
  return (
    <ColorBadgeContainer
      type={type}
      color={props.color}
    />
  )
}
