import {CSSProperties} from 'react'

export type Weight = '400' | '500' | '700'

export type Size = CSSProperties['fontSize']

export type HeadingLevel = 1

export type TypographyName =
  '40 / B' | '30 / B' |
  '20 / M' |
  '16 / R' | '16 / M' |
  '12'

export type FontSetting = {
  weight?: Weight,
  fontSize?: Size,
  lineHeight?: CSSProperties['lineHeight']
}
