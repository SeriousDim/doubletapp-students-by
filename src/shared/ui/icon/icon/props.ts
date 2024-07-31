import {SvgProps} from '../svg-element'
import {IconNames} from './icon-names.ts'

export type IconProps = {
  iconName: IconNames
} & Omit<SvgProps, 'src'>
