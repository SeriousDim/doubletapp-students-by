import {IconedButtonProps} from './props.ts'
import {IconedButtonContainer} from './styles.ts'

export function IconedButton({
  width = '30px',
  ...props
}: IconedButtonProps) {
  return (
    <IconedButtonContainer
      width={width}
      onClick={props.onClick}
    >
      {props.children}
    </IconedButtonContainer>
  )
}
