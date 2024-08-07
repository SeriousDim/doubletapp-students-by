import {ChangeEventHandler, CSSProperties} from 'react'

export type InputFieldStyles = {
  hintColor?: CSSProperties['color'],
  valueColor?: CSSProperties['color'],
  width?: CSSProperties['width']
}

export type InputFieldProps = {
  hint?: string,
  value?: string,
  styles?: InputFieldStyles,
  onChange?: ChangeEventHandler<string>
}

export type IconedInputFieldProps = {
  inputFieldProps?: InputFieldProps,
  Icon: Element
}
