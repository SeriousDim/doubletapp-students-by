import {CSSProperties, PropsWithChildren} from 'react'

export type IconedButtonProps = {
  onClick: () => void,
  width: CSSProperties['width']
}
& PropsWithChildren
