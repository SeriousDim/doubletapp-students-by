import styled from 'styled-components'
import {InputFieldStyles} from './props.ts'

export const InputFieldContainer = styled.input<{
  styles?: InputFieldStyles
}>`
  font-family: 'Geometria', Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  
  width: ${props => props?.styles?.width};

  border: 0;
  
  color: ${props => props?.styles?.valueColor || '#000000'};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props?.styles?.hintColor || 'rgba(0, 0, 0, 0.3)'};
  }
`
