import styled from 'styled-components'
import {CSSProperties} from 'react'
import {ACTIVE_BACKGROUND_COLOR, HOVERED_BACKGROUND_COLOR} from '../../../assets/colors/states.ts'
import {Button} from '../styles/button.ts'

export const IconedButtonContainer = styled(Button)<{
  width: CSSProperties['width']
}>`
  border-radius: 100%;

  width: ${props => props.width};
  height: ${props => props.width};
  
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${HOVERED_BACKGROUND_COLOR};
  }

  &:active {
    background-color: ${ACTIVE_BACKGROUND_COLOR};
  }
`
