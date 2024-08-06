import {ImageContainer} from './styles.ts'
import {AvatarProps} from './props.ts'

export function Avatar({
  width = '40px',
  ...props
}: AvatarProps) {
  return (
    <ImageContainer
      width={width}
      src={props.src}
    />
  )
}
