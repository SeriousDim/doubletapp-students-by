import {CSSProperties, PropsWithChildren} from 'react'

export type CellPropsStyles = {
  padding?: CSSProperties['padding'],
  margin?: CSSProperties['margin'],
  flex?: CSSProperties['flex'],
  width?: CSSProperties['width'],
  minWidth?: CSSProperties['minWidth']
}

export type CellProps = {
  styles?: CellPropsStyles
}
& PropsWithChildren
