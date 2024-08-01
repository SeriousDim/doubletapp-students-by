import styled from 'styled-components'
import {CSSProperties} from 'react'

export const TypographyContainer = styled.div<{
  fontSize?: CSSProperties['fontSize'],
  weight?: CSSProperties['fontWeight'],
  lineHeight?: CSSProperties['lineHeight'],
  color?: CSSProperties['color']
}>`
  font-family: 'Geometria', Arial, sans-serif;
  font-size: ${props => props['fontSize']};
  font-weight: ${props => props.weight};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color || '#000000'}
`
