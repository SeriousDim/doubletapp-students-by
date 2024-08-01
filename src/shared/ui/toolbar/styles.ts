import styled from 'styled-components'
import {CSSProperties} from 'react'

export const ToolbarContainer = styled.header<{
  horizontalPadding: CSSProperties['padding']
}>`
  height: 85.29px;

  background-color: #FFFFFF;

  box-shadow: 0 7px 64px 0 rgba(0, 0, 0, 0.07);

  width: 100%;
  box-sizing: border-box;
  padding: 0 ${props => props.horizontalPadding};
`
