import styled from 'styled-components'
import {IconedInputFieldPropsStyles, InputFieldStyles} from './props.ts'

export const InputFieldContainer = styled.input<{
  styles?: InputFieldStyles
}>`
  font-family: 'Geometria', Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  
  width: ${props => props?.styles?.width};
  min-width: 0;

  flex: ${props => props?.styles?.flex};
  
  border: 0;
  
  color: ${props => props?.styles?.valueColor || '#000000'};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props?.styles?.hintColor || 'rgba(0, 0, 0, 0.3)'};
  }
`

export const IconedInputFieldContainer = styled.div<{
  styles?: IconedInputFieldPropsStyles
}>`
  display: flex;
  height: 48px;
  gap: 16.48px;

  padding: 0 20px;
  box-sizing: border-box;
  
  flex: ${props => props?.styles?.flex};
  min-width: 0;
  
  align-items: center;
  
  background-color: #FFFFFF;
  border-radius: 6px;

  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.07);
`


