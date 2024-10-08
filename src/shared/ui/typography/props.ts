import {FontSetting, HeadingLevel, TypographyName} from './types.ts'
import {CSSProperties, PropsWithChildren} from 'react'

export type TypographyStyles = {
  color?: CSSProperties['color'],
  height?: CSSProperties['height'],
  width?: CSSProperties['width'],
  minWidth?: CSSProperties['minWidth'],
  textOverflow?: CSSProperties['textOverflow'],
  overflow?: CSSProperties['overflow'],
  whiteSpace?: CSSProperties['whiteSpace'],
  flex?: CSSProperties['flex'],
  textAlign?: CSSProperties['textAlign'],
  verticalAlign?: CSSProperties['verticalAlign']
}

export type TypographyProps = {
  as?: string,
  headingLevel?: HeadingLevel,
  name?: TypographyName,
  styles?: TypographyStyles
}
& FontSetting
& PropsWithChildren
