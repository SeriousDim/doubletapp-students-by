import {ToolbarProps} from './props.ts'
import {ToolbarContainer} from './styles.ts'

export function Toolbar({
  horizontalPadding = '130px',
  ...props
}: ToolbarProps) {
  return (
    <ToolbarContainer
      horizontalPadding={horizontalPadding}
    >
      {props.children}
    </ToolbarContainer>
  )
}
