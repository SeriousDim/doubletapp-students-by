import {CSSProperties} from 'react'
import {IconNames} from '../../icon'

export type IconedButtonProps = {
  onClick: () => void,
  padding: CSSProperties['padding'],
  iconName: IconNames
}
