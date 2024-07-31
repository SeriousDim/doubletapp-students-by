import {Svg} from '../svg-element'
import {IconProps} from './props.ts'

export function Icon(props: IconProps) {
  const {iconName, ...otherProps} = props

  return (
    <Svg
      src={`./icons/${iconName}.svg`}
      {...otherProps}
    />
  )
}
