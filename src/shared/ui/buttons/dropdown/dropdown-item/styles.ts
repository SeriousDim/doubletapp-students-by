import styled, {css} from 'styled-components'
import {HOVERED_BACKGROUND_COLOR} from '../../../../assets/colors/states.ts'

export const DropdownItemContainer = styled.li<{
  checked?: boolean
}>`
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  
  border-radius: 5px;
  
  list-style: none;
  
  display: flex;
  flex-direction: row;
  gap: 16px;
  
  align-items: center;
  
  padding: 0 19.79px 0 17.79px;
  
  background-color: ${props => props.checked ? 'rgba(73,194,232,0.11)' : '#00000000'};
  
  transition: 0.3s;
  
  ${props => {
    if (!props.checked) {
      return css`
        &:hover {
          background-color: ${HOVERED_BACKGROUND_COLOR};
        }
      `
    }
  }}
`
