import {ClassNames} from '../model/class-names.ts'
import styled from 'styled-components'

export const AppHeaderContainer = styled.div`
  @media screen and (max-width: 320px) {
    & .${ClassNames.smartphonePortrait} {
      display: block;
    }

    & .${ClassNames.desktop} {
      display: none;
    }
  }

  @media not screen and (max-width: 320px) {
    & .${ClassNames.smartphonePortrait} {
      display: none;
    }

    & .${ClassNames.desktop} {
      display: block;
    }
  }
`