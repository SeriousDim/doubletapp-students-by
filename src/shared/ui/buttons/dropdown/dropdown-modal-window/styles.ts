import styled from 'styled-components'
import {TRANSITION_TIME_MS} from './const.ts'

export const DropdownModalWindowContent = styled.ul`
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
`

export const DropdownModalWindowContainer = styled.div<{
  hidden: boolean
}>`
  display: block;
  visibility:  ${props => props.hidden ? 'hidden' : 'visible'};
  opacity: ${props => props.hidden ? 0 : 1};

  transition: ${TRANSITION_TIME_MS}ms;
`
