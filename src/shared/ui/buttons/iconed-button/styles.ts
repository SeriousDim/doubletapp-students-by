import styled from 'styled-components'
import {CSSProperties} from 'react'

export const IconedButtonContainer = styled.button<{
  padding: CSSProperties['padding']
}>`
  background-color: #FFFFFF;

  box-shadow: 0 0 16.37px 0 rgba(0, 0, 0, 0.1);

  transition: 0.3s;
  border: none;
  border-radius: 100%;
  
  padding: ${props => props.padding};

  &:hover {
    background-color: #e0e0e0;
  }
`
