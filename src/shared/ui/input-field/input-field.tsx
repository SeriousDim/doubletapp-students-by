import {InputFieldContainer} from './styles.ts'
import {InputFieldProps} from './props.ts'

export function InputField(props: InputFieldProps) {
  return (
    <InputFieldContainer
      styles={props.styles}
      placeholder={props.hint}
      value={props.value}
      onChange={props.onChange}
    />
  )
}
