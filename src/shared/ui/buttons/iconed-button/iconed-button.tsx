import {IconedButtonProps} from './props.ts'
import {IconedButtonContainer} from './styles.ts'
import DeleteIcon from '../../../assets/icons/delete.svg?react'

export function IconedButton({
  padding = '8px',
  ...props
}: IconedButtonProps) {
  return (
    <IconedButtonContainer
      onClick={props.onClick}
      padding={padding}>
      <DeleteIcon width={'14px'} height={'14px'}/>
    </IconedButtonContainer>
  )
}
