import styled from 'styled-components'
import {HOVERED_BACKGROUND_COLOR} from '../../../../assets/colors/states.ts'
import {CSSProperties} from 'react'
import {Button} from '../../styles/button.ts'
import {DROPDOWN_HEIGHT_PX, DROPDOWN_MODAL_WINDOW_TOP_POSITION} from './const.ts'
import {DropdownProps} from './props.ts'

export const DropdownContainer = styled(Button)<{
  width: CSSProperties['width']
}>`
  border-radius: 6px;
  
  height: ${`${DROPDOWN_HEIGHT_PX}px`};
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  
  width: ${props => props.width};
  padding: 0 17px 0 0;
  
  &:hover {
    background-color: ${HOVERED_BACKGROUND_COLOR};
  }
`

export const ModalWindowWrapper = styled.div<{
  modalAlignment: DropdownProps['modalAlignment']
}>`
  position: absolute;
  top: ${DROPDOWN_MODAL_WINDOW_TOP_POSITION};
  left: ${props => props.modalAlignment === 'left' ? 0 : undefined};
  right: ${props => props.modalAlignment === 'right' ? 0 : undefined};
`
