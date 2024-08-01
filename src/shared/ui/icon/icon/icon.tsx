import {Svg} from '../svg-element'
import {IconProps} from './props.ts'
import {getIcon} from './icon-names.ts'

/**
 * Позволяет выбрать одну из заданных иконок
 */
export function Icon(props: IconProps) {
  const {iconName, ...otherProps} = props

  return (
    <Svg
      src={getIcon(iconName)}
      {...otherProps}
    />
  )
}
