import {ReactSVG} from 'react-svg'
import {SvgProps} from './props.ts'

/**
 * Вставляет SVG в DOM
 */
export function Svg(props: SvgProps) {
  return (
    <ReactSVG
      src={props.src}
    />
  )
}
