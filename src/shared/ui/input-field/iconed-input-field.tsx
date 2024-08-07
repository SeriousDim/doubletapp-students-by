import {InputField} from './index.ts'
import {IconedInputFieldContainer} from './styles.ts'
import {IconedInputFieldProps} from './props.ts'
export function IconedInputField(props: IconedInputFieldProps) {
  return (
    <IconedInputFieldContainer>
      <props.Icon/>
      <InputField
        {...props.inputFieldProps}
      />
    </IconedInputFieldContainer>
  )
}
