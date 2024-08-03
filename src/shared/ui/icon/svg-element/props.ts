import React from 'react'

export type SvgProps = {
  src: string,
  width?: React.SVGProps<SVGSVGElement>['width'],
  height?: React.SVGProps<SVGSVGElement>['height']
}
