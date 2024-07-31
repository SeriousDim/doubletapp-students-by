import {ReactSVG} from 'react-svg'
import {SvgProps} from './props.ts'

export function Svg(props: SvgProps) {
  return (
    <ReactSVG
      src={props.src}
    />
  )
}
