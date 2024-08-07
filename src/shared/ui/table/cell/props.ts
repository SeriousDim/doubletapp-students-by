import {CSSProperties, PropsWithChildren} from 'react'

export type CellPropsStyles = {
  padding?: CSSProperties['padding'],
  margin?: CSSProperties['margin'],
  flex?: CSSProperties['flex'],
  width?: CSSProperties['width'],
  height?: CSSProperties['height'],
  minWidth?: CSSProperties['minWidth']
}

export type CellProps = {
  styles?: CellPropsStyles
}
& PropsWithChildren
