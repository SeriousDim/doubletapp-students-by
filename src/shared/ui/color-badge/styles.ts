import styled from 'styled-components'
import {ColorBadgeProps} from './props.ts'
import {BackgroundValues, WidthValues} from './const.ts'

export const ColorBadgeContainer = styled.div<ColorBadgeProps>`
  width: ${props => WidthValues[props.type]};
  height: ${props => WidthValues[props.type]};
  
  background: ${props => BackgroundValues[props.color]};
  
  border-radius: 100%;
`
