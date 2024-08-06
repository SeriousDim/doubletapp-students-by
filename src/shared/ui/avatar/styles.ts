import styled from 'styled-components'
import {CSSProperties} from 'react'

export const ImageContainer = styled.img <{
    width: CSSProperties['width'],
  }>`
  width: ${props => props.width};
  height: ${props => props.width};
  
  border-radius: 100%;

  outline: 2px solid rgba(255, 255, 255, 0.6);
  outline-offset: -2px;
`
