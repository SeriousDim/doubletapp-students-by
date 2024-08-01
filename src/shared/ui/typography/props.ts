import {FontSetting, HeadingLevel, TypographyName} from './types.ts'
import {CSSProperties, PropsWithChildren} from 'react'

export type TypographyProps = {
  headingLevel?: HeadingLevel,
  name?: TypographyName,
  color?: CSSProperties['color']
}
& FontSetting
& PropsWithChildren
