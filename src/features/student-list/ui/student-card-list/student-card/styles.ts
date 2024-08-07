import styled from 'styled-components'

export const CardContainer = styled.article`
  display: block;
  
  width: 100%;
  height: 170px;
  
  border-radius: 6px;
  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.07);
`

export const CardHeader = styled.div`
  padding: 16px 18px 14px 16px;
  display: flex;
  align-items: center;
  
  box-sizing: border-box;
  height: 70px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

export const PropertyListItemContainer = styled.li`
  margin-bottom: 5px;
  min-width: 0;
  
  &::marker {
    color: #49C2E8;
  }
`
