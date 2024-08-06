import {CSSProperties, ImgHTMLAttributes} from 'react'

export type AvatarProps = {
  width?: CSSProperties['width'],
  src: ImgHTMLAttributes<HTMLImageElement>['src']
}
