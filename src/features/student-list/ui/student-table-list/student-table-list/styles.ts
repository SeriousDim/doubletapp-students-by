import {CSSProperties} from 'react'
import styled from 'styled-components'

export const TableContainer = styled.table<{
  $width?: CSSProperties['width']
}>`
  width: ${props => props.$width || '100%'};
  box-sizing: border-box;
  
  border-spacing: 0;
  
  overflow: auto;
  
  tbody tr:first-child td:first-child {
    border-top-left-radius: 6px;
  }

  tbody tr:first-child td:last-child {
    border-top-right-radius: 6px;
  }

  tbody tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
  }

  tbody tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
  }
`
