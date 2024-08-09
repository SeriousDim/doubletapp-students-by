import {AppHeaderContainer} from './styles.ts'
import {ClassNames} from '../model/class-names.ts'
import {AppHeaderWidgetDesktop} from './app-header-widget-desktop.tsx'
import {AppHeaderWidgetMobile} from './app-header-widget-mobile.tsx'

export function AppHeaderWidget() {
  return (
    <AppHeaderContainer>
      <div className={ClassNames.desktop}>
        <AppHeaderWidgetDesktop/>
      </div>
      <div className={ClassNames.smartphonePortrait}>
        <AppHeaderWidgetMobile/>
      </div>
    </AppHeaderContainer>
  )
}
