import styled from 'styled-components'
import {CSSProperties} from 'react'
import {TypographyStyles} from './props.ts'

export const TypographyContainer = styled.div<{
  fontSize?: CSSProperties['fontSize'],
  weight?: CSSProperties['fontWeight'],
  lineHeight?: CSSProperties['lineHeight'],
  styles?: TypographyStyles
}>`
  font-family: 'Geometria', Arial, sans-serif;
  font-size: ${props => props['fontSize']};
  font-weight: ${props => props.weight};
  line-height: ${props => props.lineHeight};
  color: ${props => props?.styles?.color || '#000000'};
  
  text-overflow: ${props => props?.styles?.textOverflow};
  overflow: ${props => props?.styles?.overflow};
  white-space: ${props => props?.styles?.whiteSpace};
  
  width: ${props => props?.styles?.width};
  height: ${props => props?.styles?.height};
  
  flex: ${props => props?.styles?.flex};
  text-align: ${props => props?.styles?.textAlign || 'left'};
  vertical-align: ${props => props?.styles?.verticalAlign};
`
