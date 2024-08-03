import styled from 'styled-components'
import {CSSProperties} from 'react'

export const DropdownModalWindowContainer = styled.ul<{
  hidden: boolean
}>`
  background-color: #FFFFFF;
  
  border-radius: 6px;

  box-shadow: 0 0 16.37px 0 rgba(0, 0, 0, 0.1);
  
  margin: 0;
  
  width: 180px;
  box-sizing: border-box;
  
  padding: 5.21px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
  opacity: ${props => props.hidden ? 0 : 1};
  
  z-index: 1000;
  
  transition: 0.3s;
`
