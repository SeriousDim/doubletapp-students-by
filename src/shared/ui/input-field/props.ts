import {ChangeEventHandler, CSSProperties} from 'react'

export type InputFieldStyles = {
  hintColor?: CSSProperties['color'],
  valueColor?: CSSProperties['color'],
  width?: CSSProperties['width'],
  flex?: CSSProperties['flex']
}

export type InputFieldProps = {
  hint?: string,
  value?: string,
  styles?: InputFieldStyles,
  onChange?: ChangeEventHandler<string>
}

export type IconedInputFieldPropsStyles = {
  flex?: CSSProperties['flex']
}

export type IconedInputFieldProps = {
  inputFieldProps?: InputFieldProps,
  styles?: IconedInputFieldPropsStyles,
  Icon: Element
}
